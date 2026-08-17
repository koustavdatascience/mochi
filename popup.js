const visibilityToggle = document.querySelector("#visibility-toggle");
const pauseToggle = document.querySelector("#pause-toggle");
const catSelect = document.querySelector("#cat-select");
const status = document.querySelector("#status");

function setStatus(text) {
  status.textContent = text;
}

function sendToBackground(message) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) {
        resolve(null);
        return;
      }
      resolve(response || null);
    });
  });
}

function renderState(current) {
  if (!current) {
    visibilityToggle.checked = false;
    pauseToggle.checked = false;
    setStatus("This page cannot host the cat.");
    return;
  }

  visibilityToggle.checked = Boolean(current.visible);
  pauseToggle.checked = Boolean(current.paused);
  catSelect.value = current.skin || "bttvRolling";
  setStatus(current.paused ? `Paused · ${current.skinLabel || "Cat"}.` : `${current.skinLabel || "Cat"} wandering.`);
}

async function refreshState() {
  const current = await sendToBackground({ type: "desktop-cat:get-shared-state" });
  renderState(current);
}

visibilityToggle.addEventListener("change", async () => {
  const response = await sendToBackground({
    type: "desktop-cat:set-visible",
    visible: visibilityToggle.checked
  });
  if (!response) {
    setStatus("Unable to update the cat.");
    return;
  }
  renderState(response);
  if (response.visible && response.currentTabInjected === false) {
    setStatus("Cat enabled. This page may be protected.");
  } else {
    setStatus(response.visible ? "Cat is back in every tab." : "Cat is hidden in every tab.");
  }
});

catSelect.addEventListener("change", async () => {
  const response = await sendToBackground({
    type: "desktop-cat:set-skin",
    skin: catSelect.value
  });
  if (!response || !response.changed) {
    setStatus("Unable to update the cat.");
    return;
  }
  renderState(response);
  setStatus(`${response.skinLabel || "Cat"} selected for every tab.`);
});

pauseToggle.addEventListener("change", async () => {
  const response = await sendToBackground({
    type: "desktop-cat:set-paused",
    paused: pauseToggle.checked
  });
  if (!response) {
    setStatus("Unable to update the cat.");
    return;
  }
  renderState(response);
  setStatus(response.paused ? "Cat paused in every tab." : "Cat wandering in every tab.");
});

refreshState();
