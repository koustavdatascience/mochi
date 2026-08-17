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
  paused: false,
  position: { x: 0.92, y: 0.88 }
});

let sharedState = { ...DEFAULT_STATE, position: { ...DEFAULT_STATE.position } };

function normalizePosition(position) {
  if (!position || typeof position !== "object") {
    return { ...DEFAULT_STATE.position };
  }
  const x = Number(position.x);
  const y = Number(position.y);
  return {
    x: Number.isFinite(x) ? Math.min(Math.max(x, 0), 1) : DEFAULT_STATE.position.x,
    y: Number.isFinite(y) ? Math.min(Math.max(y, 0), 1) : DEFAULT_STATE.position.y
  };
}

const stateReady = chrome.storage.local.get(DEFAULT_STATE).then((stored) => {
  sharedState = {
    skin: typeof stored.skin === "string" && SKIN_LABELS[stored.skin] ? stored.skin : DEFAULT_STATE.skin,
    visible: typeof stored.visible === "boolean" ? stored.visible : DEFAULT_STATE.visible,
    paused: typeof stored.paused === "boolean" ? stored.paused : DEFAULT_STATE.paused,
    position: normalizePosition(stored.position)
  };
  return sharedState;
});

function responseState(extra = {}) {
  return {
    ...sharedState,
    position: { ...sharedState.position },
    skinLabel: SKIN_LABELS[sharedState.skin] || SKIN_LABELS.bttvRolling,
    ...extra
  };
}

async function persistAndBroadcast(nextState) {
  sharedState = {
    ...sharedState,
    ...nextState,
    position: normalizePosition(nextState.position || sharedState.position)
  };
  await chrome.storage.local.set(sharedState);

  const tabs = await chrome.tabs.query({});
  await Promise.allSettled(
    tabs
      .filter((tab) => tab.id !== undefined)
      .map((tab) => chrome.tabs.sendMessage(tab.id, {
        type: "desktop-cat:sync-state",
        ...responseState()
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
    await chrome.tabs.sendMessage(tabId, {
      type: "desktop-cat:sync-state",
      ...responseState()
    }).catch(() => undefined);
    return true;
  } catch (_error) {
    // Protected browser pages and tabs without host access are expected to reject injection.
    return false;
  }
}

async function rehydrateOpenTabs() {
  await stateReady;
  const tabs = await chrome.tabs.query({});
  await Promise.all(tabs.filter(isEligibleTab).map((tab) => rehydrateTab(tab.id)));
}

async function rehydrateActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const tab = tabs[0];
  if (!tab || !isEligibleTab(tab)) {
    return false;
  }
  return rehydrateTab(tab.id);
}

chrome.runtime.onInstalled.addListener(() => {
  rehydrateOpenTabs();
});

chrome.runtime.onStartup.addListener(() => {
  rehydrateOpenTabs();
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
  rehydrateTab(tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "complete") {
    rehydrateTab(tabId);
  }
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
      const visible = Boolean(message.visible);
      const currentTabInjected = visible ? await rehydrateActiveTab() : true;
      await persistAndBroadcast({ visible });
      sendResponse(responseState({ currentTabInjected }));
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
      return;
    }

    if (message.type === "desktop-cat:set-position") {
      await persistAndBroadcast({ position: normalizePosition(message.position) });
      sendResponse(responseState({ changed: true }));
    }
  }).catch(() => sendResponse(null));

  return true;
});
