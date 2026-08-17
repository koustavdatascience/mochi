# Mochi — your little browser cat

Mochi is a tiny, self-contained Manifest V3 Chrome extension that adds an animated cat to webpages. Mochi wanders gently, naps, stretches, loafs, gets zoomies, and reacts when petted.

The extension has no accounts, backend, analytics, paywall, notifications, or guilt-driven mechanics. It does not read, collect, or transmit page content. Its only runtime permission is the ability to run the local content script on pages so the cat can appear.

## Interactions

| Interaction | Result |
| --- | --- |
| Let Mochi wander | Mochi chooses a new place on the page and walks there. |
| Click or press Enter/Space | Mochi purrs. |
| Double-click | Mochi gets a tiny burst of zoomies. |
| Drag | Move Mochi anywhere on the current page. |
| Hover | Reveal Mochi’s nameplate. |

## Install locally

1. Open `chrome://extensions` in Chrome.
2. Turn on **Developer mode**.
3. Click **Load unpacked**.
4. Select this `chrome-extension` directory.
5. Open or refresh a webpage.

The extension uses an isolated Shadow DOM host so Mochi’s visual styles do not leak into the pages it visits.

## Project files

| File | Purpose |
| --- | --- |
| `manifest.json` | Manifest V3 metadata and content-script registration. |
| `content.js` | Creates Mochi and controls movement, idle behaviors, dragging, and reactions. |
| `styles.css` | Isolated cat illustration, animations, speech bubble, and reduced-motion styles. |
| `icon.svg` | Extension manager icon. |
