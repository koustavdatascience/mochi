(() => {
  const ROOT_ID = "desktop-cat-root";
  const CAT_ID = "desktop-cat";
  const CAT_SIZE = 96;
  const MARGIN = 8;

  const SKINS = Object.freeze({
    badBoy: { label: "Bad Boy Cat", file: "bad-boy" },
    blackCat: { label: "Black Cat", file: "black-cat" },
    bttvRolling: { label: "BTTV Rolling Cat", file: "bttv-rolling-cat" },
    littleCream: { label: "Little Cream Cat", file: "little-cream-cat" },
    greenFrog: { label: "Green Frog Cat", file: "green-frog-cat" },
    tinyCute: { label: "Tiny Cute Cat", file: "tiny-cute-cat" },
    scarfCat: { label: "Cat in a Scarf", file: "cat-in-a-scarf" },
    blackCatRoll: { label: "Black Cat Roll", file: "black-cat-roll" },
    spinningBlue: { label: "Spinning Blue Cat", file: "spinning-blue-cat" },
    yawningWhite: { label: "Yawning White Cat", file: "yawning-white-cat" },
    grayPixel: { label: "Gray Pixel Cat", file: "gray-pixel-cat" },
    blushingCute: { label: "Blushing Cute Cat", file: "blushing-cute-cat" },
    danceBreak: { label: "Dance Break Cat", file: "dance-break" },
    blueMeme: { label: "Blue Meme Cat", file: "blue-meme-cat" },
    heartLove: { label: "Heart-Love Cat", file: "heart-love-cat" },
    mewoOmori: { label: "Mewo from Omori", file: "mewo-omori" },
    whiteSleeping: { label: "Sleeping White Cat", file: "white-sleeping-cat" },
    whiteKitty: { label: "White Kitty", file: "white-kitty" },
    blehCat: { label: "Bleh Cat", file: "bleh-cat" }
  });

  const state = {
    skin: "bttvRolling",
    x: Math.max(MARGIN, window.innerWidth - CAT_SIZE - 48),
    y: Math.max(MARGIN, window.innerHeight - CAT_SIZE - 12),
    visible: true,
    paused: false,
    assetMode: "animated",
    dragging: false,
    pointerId: null,
    dragOffsetX: 0,
    dragOffsetY: 0,
    root: null,
    cat: null
  };

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function extensionAsset(relativePath) {
    return chrome.runtime.getURL(relativePath);
  }

  function updateAsset() {
    if (!state.cat) {
      return;
    }

    const fileStem = SKINS[state.skin].file;
    const extension = state.assetMode === "animated" ? "gif" : "png";
    const nextSrc = extensionAsset(`assets/${fileStem}.${extension}`);
    if (state.cat.src !== nextSrc) {
      state.cat.src = nextSrc;
    }
    state.cat.dataset.skin = state.skin;
    state.cat.dataset.mode = state.assetMode;
  }

  function setAssetMode(mode) {
    if (state.assetMode === mode) {
      return;
    }
    state.assetMode = mode;
    updateAsset();
  }

  function render() {
    if (!state.cat) {
      return;
    }
    state.cat.style.transform = `translate3d(${Math.round(state.x)}px, ${Math.round(state.y)}px, 0)`;
  }

  function setVisible(visible) {
    state.visible = Boolean(visible);
    if (state.root) {
      state.root.hidden = !state.visible;
    }
    if (state.visible && !state.paused && document.visibilityState === "visible") {
      setAssetMode("animated");
    } else {
      setAssetMode("still");
    }
  }

  function setPaused(paused) {
    state.paused = Boolean(paused);
    setAssetMode(state.paused || document.visibilityState !== "visible" ? "still" : "animated");
    render();
  }

  function setSkin(skinName) {
    if (!SKINS[skinName]) {
      return false;
    }
    state.skin = skinName;
    updateAsset();
    render();
    return true;
  }

  function applySharedState(sharedState) {
    if (!sharedState || typeof sharedState !== "object") {
      return;
    }
    if (typeof sharedState.skin === "string" && SKINS[sharedState.skin]) {
      state.skin = sharedState.skin;
    }
    if (typeof sharedState.visible === "boolean") {
      state.visible = sharedState.visible;
    }
    if (typeof sharedState.paused === "boolean") {
      state.paused = sharedState.paused;
    }
    if (state.root) {
      state.root.hidden = !state.visible;
    }
    updateAsset();
    render();
    setAssetMode(state.paused || document.visibilityState !== "visible" ? "still" : "animated");
  }

  function handleResize() {
    state.x = clamp(state.x, MARGIN, Math.max(MARGIN, window.innerWidth - CAT_SIZE - MARGIN));
    state.y = clamp(state.y, MARGIN, Math.max(MARGIN, window.innerHeight - CAT_SIZE - MARGIN));
    render();
  }

  function handlePointerDown(event) {
    if (!state.cat || !state.visible || event.button !== 0) {
      return;
    }

    state.dragging = true;
    state.pointerId = event.pointerId;
    state.dragOffsetX = event.clientX - state.x;
    state.dragOffsetY = event.clientY - state.y;
    state.cat.classList.add("is-dragging");
    state.cat.setPointerCapture?.(event.pointerId);
    event.preventDefault();
    event.stopPropagation();
  }

  function handlePointerMove(event) {
    if (!state.dragging || event.pointerId !== state.pointerId) {
      return;
    }

    state.x = clamp(
      event.clientX - state.dragOffsetX,
      MARGIN,
      Math.max(MARGIN, window.innerWidth - CAT_SIZE - MARGIN)
    );
    state.y = clamp(
      event.clientY - state.dragOffsetY,
      MARGIN,
      Math.max(MARGIN, window.innerHeight - CAT_SIZE - MARGIN)
    );
    render();
    event.preventDefault();
  }

  function stopDragging(event) {
    if (!state.dragging || (event.pointerId !== undefined && event.pointerId !== state.pointerId)) {
      return;
    }
    state.dragging = false;
    state.pointerId = null;
    state.cat?.classList.remove("is-dragging");
    state.cat?.releasePointerCapture?.(event.pointerId);
  }

  function createCat() {
    if (document.getElementById(ROOT_ID)) {
      return;
    }

    const root = document.createElement("div");
    root.id = ROOT_ID;
    root.setAttribute("aria-hidden", "true");

    const cat = document.createElement("img");
    cat.id = CAT_ID;
    cat.className = "desktop-cat-animated";
    cat.alt = "";
    cat.draggable = false;
    cat.addEventListener("pointerdown", handlePointerDown, { passive: false });
    cat.addEventListener("pointermove", handlePointerMove, { passive: false });
    cat.addEventListener("pointerup", stopDragging, { passive: true });
    cat.addEventListener("pointercancel", stopDragging, { passive: true });
    root.appendChild(cat);
    (document.documentElement || document.body).appendChild(root);

    state.root = root;
    state.cat = cat;
    updateAsset();
    render();
  }

  function handleMessage(message, sendResponse) {
    if (!message || typeof message.type !== "string") {
      return;
    }

    if (message.type === "desktop-cat:sync-state") {
      applySharedState(message);
      sendResponse?.({ visible: state.visible, paused: state.paused, skin: state.skin, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:set-visible") {
      setVisible(message.visible);
      sendResponse?.({ visible: state.visible, paused: state.paused, skin: state.skin, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:set-paused") {
      setPaused(message.paused);
      sendResponse?.({ visible: state.visible, paused: state.paused, skin: state.skin, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:set-skin") {
      const changed = setSkin(message.skin);
      sendResponse?.({ changed, visible: state.visible, paused: state.paused, skin: state.skin, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:get-state") {
      sendResponse?.({ visible: state.visible, paused: state.paused, skin: state.skin, skinLabel: SKINS[state.skin].label });
    }
  }

  document.addEventListener("visibilitychange", () => {
    setAssetMode(state.paused || document.visibilityState !== "visible" ? "still" : "animated");
  });
  window.addEventListener("resize", handleResize, { passive: true });
  window.addEventListener("pointerup", stopDragging, { passive: true });
  window.addEventListener("pointercancel", stopDragging, { passive: true });
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    handleMessage(message, sendResponse);
    return true;
  });

  createCat();
  chrome.runtime.sendMessage({ type: "desktop-cat:get-shared-state" }, (sharedState) => {
    if (!chrome.runtime.lastError) {
      applySharedState(sharedState);
    }
  });
})();
