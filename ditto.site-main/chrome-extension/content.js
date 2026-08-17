(() => {
  "use strict";

  if (window.top !== window.self || document.getElementById("mochi-extension-host")) {
    return;
  }

  const host = document.createElement("div");
  host.id = "mochi-extension-host";
  host.setAttribute("aria-label", "Mochi, your little browser cat");
  document.documentElement.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });
  const root = document.createElement("div");
  root.className = "mochi-root";
  root.innerHTML = `
    <div class="mochi-cat-wrap" data-mode="walk" role="button" tabindex="0" aria-label="Pet Mochi">
      <div class="mochi-bubble" aria-live="polite"></div>
      <div class="mochi-cat" aria-hidden="true">
        <div class="mochi-cat__tail"></div>
        <div class="mochi-cat__body"></div>
        <div class="mochi-cat__head">
          <div class="mochi-cat__ear mochi-cat__ear--left"></div>
          <div class="mochi-cat__ear mochi-cat__ear--right"></div>
          <div class="mochi-cat__eye mochi-cat__eye--left"></div>
          <div class="mochi-cat__eye mochi-cat__eye--right"></div>
          <div class="mochi-cat__nose"></div>
          <div class="mochi-cat__mouth"></div>
          <div class="mochi-cat__blush mochi-cat__blush--left"></div>
          <div class="mochi-cat__blush mochi-cat__blush--right"></div>
          <div class="mochi-cat__whiskers mochi-cat__whiskers--left"></div>
          <div class="mochi-cat__whiskers mochi-cat__whiskers--right"></div>
        </div>
        <div class="mochi-cat__paw mochi-cat__paw--left"></div>
        <div class="mochi-cat__paw mochi-cat__paw--right"></div>
      </div>
      <div class="mochi-z">Z</div>
      <div class="mochi-z mochi-z--two">z</div>
      <div class="mochi-z mochi-z--three">·</div>
      <div class="mochi-sparkles" aria-hidden="true"></div>
      <div class="mochi-nameplate">MOCHI</div>
    </div>
  `;
  shadow.appendChild(root);

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = chrome.runtime.getURL("styles.css");
  shadow.appendChild(stylesheet);

  const cat = root.querySelector(".mochi-cat-wrap");
  const bubble = root.querySelector(".mochi-bubble");
  const CAT_WIDTH = 96;
  const CAT_HEIGHT = 116;
  const margin = 18;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let position = {
    x: Math.max(margin, window.innerWidth * 0.72),
    y: Math.max(margin, window.innerHeight * 0.68),
  };
  let target = { ...position };
  let mode = "walk";
  let rafId = 0;
  let nextActionTimer = 0;
  let bubbleTimer = 0;
  let dragging = false;
  let dragOffset = { x: 0, y: 0 };
  let lastFrame = performance.now();

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const bounds = () => ({
    maxX: Math.max(margin, window.innerWidth - CAT_WIDTH - margin),
    maxY: Math.max(margin, window.innerHeight - CAT_HEIGHT - margin),
  });

  const setPosition = (x, y) => {
    const { maxX, maxY } = bounds();
    position.x = clamp(x, margin, maxX);
    position.y = clamp(y, margin, maxY);
    cat.classList.toggle("is-left", position.x > window.innerWidth * 0.55);
    cat.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
  };

  const hideBubble = () => {
    window.clearTimeout(bubbleTimer);
    bubble.classList.remove("is-visible");
  };

  const say = (message, duration = 1800) => {
    window.clearTimeout(bubbleTimer);
    bubble.textContent = message;
    bubble.classList.add("is-visible");
    bubbleTimer = window.setTimeout(hideBubble, duration);
  };

  const setMode = (nextMode) => {
    mode = nextMode;
    cat.dataset.mode = nextMode;
  };

  const chooseTarget = () => {
    const { maxX, maxY } = bounds();
    const edgeBias = Math.random() < 0.36;
    target = {
      x: edgeBias && Math.random() < 0.5
        ? margin + Math.random() * 48
        : margin + Math.random() * Math.max(1, maxX - margin),
      y: edgeBias && Math.random() < 0.5
        ? margin + Math.random() * 48
        : margin + Math.random() * Math.max(1, maxY - margin),
    };
  };

  const stopWalking = () => {
    window.cancelAnimationFrame(rafId);
    rafId = 0;
  };

  const walkFrame = (now) => {
    if (document.hidden || dragging) {
      lastFrame = now;
      rafId = window.requestAnimationFrame(walkFrame);
      return;
    }

    const seconds = Math.min((now - lastFrame) / 1000, 0.08);
    lastFrame = now;
    const dx = target.x - position.x;
    const dy = target.y - position.y;
    const distance = Math.hypot(dx, dy);
    const speed = reducedMotion.matches ? 35 : 74;

    if (distance < 4) {
      setPosition(target.x, target.y);
      stopWalking();
      window.clearTimeout(nextActionTimer);
      nextActionTimer = window.setTimeout(chooseBehavior, 900 + Math.random() * 2400);
      return;
    }

    const step = Math.min(distance, speed * seconds);
    setPosition(position.x + (dx / distance) * step, position.y + (dy / distance) * step);
    rafId = window.requestAnimationFrame(walkFrame);
  };

  const startWalking = (announce = false) => {
    window.clearTimeout(nextActionTimer);
    hideBubble();
    chooseTarget();
    setMode("walk");
    if (announce) {
      say("off I go", 1200);
    }
    lastFrame = performance.now();
    stopWalking();
    rafId = window.requestAnimationFrame(walkFrame);
  };

  const finishBehavior = (delay = 900) => {
    window.clearTimeout(nextActionTimer);
    nextActionTimer = window.setTimeout(() => startWalking(), delay);
  };

  const chooseBehavior = () => {
    if (document.hidden || dragging) {
      finishBehavior(1800);
      return;
    }

    const roll = Math.random();
    if (roll < 0.27) {
      setMode("sleep");
      say("z z z", 4400);
      finishBehavior(4800 + Math.random() * 5000);
    } else if (roll < 0.44) {
      setMode("stretch");
      say("stretch...", 1500);
      finishBehavior(1800);
    } else if (roll < 0.60) {
      setMode("zoomies");
      say("zoomies!", 1300);
      chooseTarget();
      finishBehavior(1300);
    } else if (roll < 0.75) {
      setMode("purr");
      say("purrr", 1900);
      finishBehavior(2100);
    } else if (roll < 0.90) {
      setMode("loaf");
      say("just loafing", 1900);
      finishBehavior(2600);
    } else {
      setMode("look");
      say("hmm...", 1400);
      finishBehavior(1900);
    }
  };

  const pet = () => {
    window.clearTimeout(nextActionTimer);
    stopWalking();
    setMode("purr");
    say("purrr", 1600);
    nextActionTimer = window.setTimeout(() => startWalking(), 1750);
  };

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    dragging = true;
    stopWalking();
    window.clearTimeout(nextActionTimer);
    hideBubble();
    const rect = cat.getBoundingClientRect();
    dragOffset = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    cat.classList.add("is-dragging");
    cat.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragging) return;
    event.preventDefault();
    setPosition(event.clientX - dragOffset.x, event.clientY - dragOffset.y);
  };

  const handlePointerUp = (event) => {
    if (!dragging) return;
    dragging = false;
    cat.classList.remove("is-dragging");
    cat.releasePointerCapture?.(event.pointerId);
    target = { ...position };
    finishBehavior(900);
  };

  cat.addEventListener("pointerdown", handlePointerDown);
  cat.addEventListener("pointermove", handlePointerMove);
  cat.addEventListener("pointerup", handlePointerUp);
  cat.addEventListener("pointercancel", handlePointerUp);
  cat.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!dragging) pet();
  });
  cat.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      pet();
    }
  });
  cat.addEventListener("dblclick", (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.clearTimeout(nextActionTimer);
    stopWalking();
    setMode("zoomies");
    say("weeeee", 1400);
    chooseTarget();
    nextActionTimer = window.setTimeout(() => startWalking(), 1400);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopWalking();
    } else if (mode === "walk" && !dragging) {
      lastFrame = performance.now();
      rafId = window.requestAnimationFrame(walkFrame);
    }
  });

  window.addEventListener("resize", () => {
    setPosition(position.x, position.y);
    target = {
      x: clamp(target.x, margin, bounds().maxX),
      y: clamp(target.y, margin, bounds().maxY),
    };
  }, { passive: true });

  setPosition(position.x, position.y);
  window.setTimeout(() => startWalking(), 1100);
})();
