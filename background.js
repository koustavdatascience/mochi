const SKIN_LABELS = Object.freeze({
  badBoy: "Bad Boy",
  blackCat: "Black Cat",
  bttvRolling: "Rolling Cat",
  littleCream: "Cream Cat",
  greenFrog: "Frog Cat",
  tinyCute: "Tiny Cat",
  scarfCat: "Scarf Cat",
  blackCatRoll: "Cat Roll",
  spinningBlue: "Blue Spinner",
  yawningWhite: "Yawning Cat",
  grayPixel: "Pixel Cat",
  blushingCute: "Blush Cat",
  danceBreak: "Dancer",
  blueMeme: "Meme Cat",
  heartLove: "Love Cat",
  mewoOmori: "Mewo",
  whiteSleeping: "Sleepy Cat",
  whiteKitty: "White Kitty",
  blehCat: "Bleh Cat"
});

const DEFAULT_STATE = Object.freeze({
  skin: "bttvRolling",
  visible: true,
  paused: false
});

let sharedState = { ...DEFAULT_STATE };
const stateReady = chrome.storage.local.get(DEFAULT_STATE).then((stored) => {
  sharedState = {
    skin: typeof stored.skin === "string" && SKIN_LABELS[stored.skin] ? stored.skin : DEFAULT_STATE.skin,
    visible: typeof stored.visible === "boolean" ? stored.visible : DEFAULT_STATE.visible,
    paused: typeof stored.paused === "boolean" ? stored.paused : DEFAULT_STATE.paused
  };
  return sharedState;
});

function responseState(extra = {}) {
  return {
    ...sharedState,
    skinLabel: SKIN_LABELS[sharedState.skin] || SKIN_LABELS.bttvRolling,
    ...extra
  };
}

async function persistAndBroadcast(nextState) {
  sharedState = { ...sharedState, ...nextState };
  await chrome.storage.local.set(sharedState);

  const tabs = await chrome.tabs.query({});
  await Promise.allSettled(
    tabs
      .filter((tab) => tab.id !== undefined)
      .map((tab) => chrome.tabs.sendMessage(tab.id, {
        type: "desktop-cat:sync-state",
        ...sharedState
      }).catch(() => undefined))
  );
}

function isEligibleTab(tab) {
  const url = typeof tab.url === "string" ? tab.url : "";
  return tab.id !== undefined && !/^(chrome|edge|about|devtools|view-source|chrome-extension):/i.test(url);
}

async function rehydrateTab(tabId) {
  try {
    await chrome.scripting.insertCSS({ target: { tabId }, files: ["cat.css"] });
    await chrome.scripting.executeScript({ target: { tabId }, files: ["content.js"] });
  } catch (_error) {
    // Protected browser pages and tabs without host access are expected to reject injection.
  }
}

async function rehydrateOpenTabs() {
  await stateReady;
  const tabs = await chrome.tabs.query({});
  await Promise.all(tabs.filter(isEligibleTab).map((tab) => rehydrateTab(tab.id)));
}

chrome.runtime.onInstalled.addListener(() => {
  rehydrateOpenTabs();
});

chrome.runtime.onStartup.addListener(() => {
  rehydrateOpenTabs();
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (!message?.type) {
    return;
  }

  stateReady.then(async () => {
    if (message.type === "desktop-cat:get-shared-state") {
      sendResponse(responseState());
      return;
    }

    if (message.type === "desktop-cat:set-visible") {
      await persistAndBroadcast({ visible: Boolean(message.visible) });
      sendResponse(responseState());
      return;
    }

    if (message.type === "desktop-cat:set-paused") {
      await persistAndBroadcast({ paused: Boolean(message.paused) });
      sendResponse(responseState());
      return;
    }

    if (message.type === "desktop-cat:set-skin") {
      if (!SKIN_LABELS[message.skin]) {
        sendResponse(responseState({ changed: false }));
        return;
      }
      await persistAndBroadcast({ skin: message.skin });
      sendResponse(responseState({ changed: true }));
    }
  }).catch(() => sendResponse(null));

  return true;
});
