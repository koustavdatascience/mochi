# Desktop Cat

Desktop Cat is a small, offline-first Manifest V3 extension that places an animated cat on each browser tab. It has no accounts, analytics, network calls, notifications, or monetization.

## Included animation set

The extension uses the supplied animated GIFs as one looping asset per behavior state. The browser plays each GIF natively; JavaScript only swaps assets and moves the cat.

| State | Bundled asset |
|---|---|
| Idle | `assets/idle.gif` |
| Walk | `assets/walk.gif` |
| Sit | `assets/sit.gif` |
| Groom | `assets/groom.gif` |
| Sleep | `assets/sleep.gif` |
| Scratch / playful roll | `assets/scratch.gif` |

Each GIF has a matching first-frame PNG. Those static frames are used while the cat is paused or while a tab is hidden, so the extension does not keep an animated asset active unnecessarily.

## Load locally

1. Open `chrome://extensions` or `edge://extensions`.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose this `desktop-cat` folder.
5. Open a normal web page; the cat should appear near the bottom edge.

The toolbar popup provides **Show cat** and **Pause cat** controls for the current tab. The cat does not intercept page clicks because the overlay uses `pointer-events: none`.

The extension cannot inject into browser-owned pages such as `chrome://extensions`, the Chrome Web Store, or other restricted browser surfaces. That is expected behavior.

## Local verification

From this directory, run:

```bash
node --check content.js
node --check popup.js
node --check background.js
python3 verify_extension.py
```

The extension is intended for local unpacked use. No changes are pushed or published by this workspace.

## Cat styles

The popup now includes a **Cat style** selector with twelve individual options: Rolling Orange Cat, Tiny Calico, Gray Pixel Cat, Cute Sleeping Cat, Cat in a Scarf, Black-and-White Roll, Yawning Calico, Round Cute Cat, Blue Meme Cat, Mewo, Lying White Cat, and White Kitty. Each option uses its own supplied looping GIF. Changing the selector swaps the active tab immediately; it does not add storage, accounts, network calls, or permissions.
