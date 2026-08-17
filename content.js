(() => {
  if (window.__mochiContentInitialized) {
    return;
  }
  window.__mochiContentInitialized = true;

  const ROOT_ID = "desktop-cat-root";
  const CAT_ID = "desktop-cat";
  const CAT_SIZE = 96;
  const MARGIN = 8;

  const SKINS = Object.freeze({
    badBoy: { label: "Bad Boy", file: "bad-boy" },
    blackCat: { label: "Black Cat", file: "black-cat" },
    bttvRolling: { label: "Rolling Cat", file: "bttv-rolling-cat" },
    littleCream: { label: "Cream Cat", file: "little-cream-cat" },
    greenFrog: { label: "Frog Cat", file: "green-frog-cat" },
    tinyCute: { label: "Tiny Cat", file: "tiny-cute-cat" },
    scarfCat: { label: "Scarf Cat", file: "cat-in-a-scarf" },
    blackCatRoll: { label: "Cat Roll", file: "black-cat-roll" },
    spinningBlue: { label: "Blue Spinner", file: "spinning-blue-cat" },
    yawningWhite: { label: "Yawning Cat", file: "yawning-white-cat" },
    grayPixel: { label: "Pixel Cat", file: "gray-pixel-cat" },
    blushingCute: { label: "Blush Cat", file: "blushing-cute-cat" },
    danceBreak: { label: "Dancer", file: "dance-break" },
    blueMeme: { label: "Meme Cat", file: "blue-meme-cat" },
    heartLove: { label: "Love Cat", file: "heart-love-cat" },
    mewoOmori: { label: "Mewo", file: "mewo-omori" },
    whiteSleeping: { label: "Sleepy Cat", file: "white-sleeping-cat" },
    whiteKitty: { label: "White Kitty", file: "white-kitty" },
    blehCat: { label: "Bleh Cat", file: "bleh-cat" },
    paperHat: { label: "Paper Hat", file: "paper-hat" }
  });

  const state = {
    skin: "bttvRolling",
    x: Math.max(MARGIN, window.innerWidth - CAT_SIZE - 48),
    y: Math.max(MARGIN, window.innerHeight - CAT_SIZE - 12),
    position: { x: 0.92, y: 0.88 },
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

  function maxPosition() {
    return {
      x: Math.max(MARGIN, window.innerWidth - CAT_SIZE - MARGIN),
      y: Math.max(MARGIN, window.innerHeight - CAT_SIZE - MARGIN)
    };
  }

  function normalizePosition(position) {
    const x = Number(position?.x);
    const y = Number(position?.y);
    return {
      x: Number.isFinite(x) ? clamp(x, 0, 1) : 0.92,
      y: Number.isFinite(y) ? clamp(y, 0, 1) : 0.88
    };
  }

  function applyNormalizedPosition(position) {
    state.position = normalizePosition(position);
    const limits = maxPosition();
    state.x = state.position.x * limits.x;
    state.y = state.position.y * limits.y;
  }

  function currentNormalizedPosition() {
    const limits = maxPosition();
    return {
      x: limits.x ? clamp(state.x / limits.x, 0, 1) : 0.92,
      y: limits.y ? clamp(state.y / limits.y, 0, 1) : 0.88
    };
  }

  function persistPosition() {
    state.position = currentNormalizedPosition();
    chrome.runtime.sendMessage({
      type: "desktop-cat:set-position",
      position: state.position
    }, () => {
      void chrome.runtime.lastError;
    });
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
    if (sharedState.position && typeof sharedState.position === "object") {
      applyNormalizedPosition(sharedState.position);
    }
    if (state.root) {
      state.root.hidden = !state.visible;
    }
    updateAsset();
    render();
    setAssetMode(state.paused || document.visibilityState !== "visible" ? "still" : "animated");
  }

  function handleResize() {
    applyNormalizedPosition(state.position);
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
    persistPosition();
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
    applyNormalizedPosition(state.position);
    updateAsset();
    render();
  }

  function handleMessage(message, sendResponse) {
    if (!message || typeof message.type !== "string") {
      return;
    }

    if (message.type === "desktop-cat:sync-state") {
      applySharedState(message);
      sendResponse?.({ visible: state.visible, paused: state.paused, skin: state.skin, position: state.position, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:set-visible") {
      setVisible(message.visible);
      sendResponse?.({ visible: state.visible, paused: state.paused, skin: state.skin, position: state.position, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:set-paused") {
      setPaused(message.paused);
      sendResponse?.({ visible: state.visible, paused: state.paused, skin: state.skin, position: state.position, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:set-skin") {
      const changed = setSkin(message.skin);
      sendResponse?.({ changed, visible: state.visible, paused: state.paused, skin: state.skin, position: state.position, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:set-position") {
      applyNormalizedPosition(message.position);
      render();
      sendResponse?.({ changed: true, visible: state.visible, paused: state.paused, skin: state.skin, position: state.position, skinLabel: SKINS[state.skin].label });
      return;
    }

    if (message.type === "desktop-cat:get-state") {
      sendResponse?.({ visible: state.visible, paused: state.paused, skin: state.skin, position: state.position, skinLabel: SKINS[state.skin].label });
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
