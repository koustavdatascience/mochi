# Mochi smoke-test notes

The extension was loaded into Chromium with the local `chrome-extension` directory and exercised against `test-page.html`.

- `manifest.json` passed JSON validation.
- `content.js` passed Node syntax validation.
- Chromium successfully injected `#mochi-extension-host` into the test page.
- A 1280×900 screenshot confirmed that Mochi renders above page content, remains visually separated from the page, and displays the nameplate.
- A closer crop confirmed that the speech bubble flips to the left side when Mochi is near the right edge, keeping the bubble inside the viewport.
- Chromium completed the headless smoke test successfully. The only logged message was an unrelated DBus/UPower environment warning.
