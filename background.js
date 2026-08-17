const SKIN_LABELS = Object.freeze({
  badBoy: "Bad Boy Cat",
  blackCat: "Black Cat",
  bttvRolling: "BTTV Rolling Cat",
  littleCream: "Little Cream Cat",
  greenFrog: "Green Frog Cat",
  tinyCute: "Tiny Cute Cat",
  scarfCat: "Cat in a Scarf",
  blackCatRoll: "Black Cat Roll",
  spinningBlue: "Spinning Blue Cat",
  yawningWhite: "Yawning White Cat",
  grayPixel: "Gray Pixel Cat",
  blushingCute: "Blushing Cute Cat",
  danceBreak: "Dance Break Cat",
  blueMeme: "Blue Meme Cat",
  heartLove: "Heart-Love Cat",
  mewoOmori: "Mewo from Omori",
  whiteSleeping: "Sleeping White Cat",
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
