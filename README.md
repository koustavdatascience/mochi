# Mochi

<p align="center">
  <img src="assets/mochi-logo.png" alt="Mochi official black cat logo" width="150">
</p>

<h3 align="center">A tiny cat for every browser tab.</h3>

<p align="center">
  Mochi is a small, offline-first Manifest V3 browser extension that lets an animated cat keep you company while you work, study, or browse.
</p>

<p align="center">
  <a href="https://github.com/koustavdatascience/mochi">Repository</a> ·
  <a href="https://github.com/koustavdatascience/mochi/issues">Issues</a> ·
  <a href="https://github.com/koustavdatascience">Made by Koustav Roy</a>
</p>

> Your tabs looked a little lonely. Mochi came to hang out :3

## Showcase

Mochi is intentionally small and a little unnecessary. It adds a bit of personality to the browser without introducing feeds, notifications, accounts, or visual clutter.

![Mochi popup showcase](docs/screenshots/popup-showcase.png)

The popup follows Mochi’s official black-and-white logo with a compact monochrome control panel, rounded cards, high-contrast toggles, and a small kawaii touch. When Mochi is updated or the browser starts, it also attempts to restore itself into already-open eligible tabs without requiring a manual page refresh.

![Mochi cat style gallery](docs/screenshots/cat-gallery.png)

Mochi currently includes **nineteen cat styles**, ranging from pixel-art companions and sleepy cats to a scarf-wearing cat, a rolling cat, a dance-break cat, and Mewo from *OMORI*.

## Features

| Feature | What it does |
| --- | --- |
| **Nineteen cat styles** | Choose the animation that matches your mood. Each style has an animated GIF and a matching PNG pause frame, with short names that are easy to scan. |
| **Cross-tab synchronization** | Your selected cat, visibility setting, pause state, and position are shared across eligible tabs. |
| **Drag-and-drop positioning** | Move Mochi around the page and leave it wherever you like; the position is stored as a normalized viewport placement so it stays consistent across tabs and screen sizes. |
| **Pause mode** | Freeze the current cat when you need a quiet, still companion. |
| **Global visibility control** | Show or hide Mochi across all eligible tabs from the popup. Turning it on also attempts to inject Mochi into the current eligible tab immediately. |
| **Offline-first behavior** | The extension ships its assets locally and does not require an account or network connection. |
| **Official Mochi branding** | The supplied black cat mark is used in the popup, toolbar icon, extension listing icon, and README. |

## Installation

Mochi is currently installed locally as an unpacked extension. This is useful for personal use, development, and trying the project before a browser-store release.

### Chrome or Chromium-based browsers

1. Clone the repository:

   ```bash
   git clone https://github.com/koustavdatascience/mochi.git
   cd mochi
   ```

2. Open the extensions page by visiting [`chrome://extensions`](chrome://extensions) in Chrome or Chromium.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose the cloned `mochi` directory.
6. Open a normal website. Mochi should appear near the lower edge of the page.

Chrome’s unpacked-extension workflow is documented in the official extension development guide.[1]

### Microsoft Edge

1. Clone or download this repository.
2. Visit [`edge://extensions`](edge://extensions).
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose the repository directory.

### Updating a local installation

Pull the latest changes, return to the extensions page, and click **Reload** on the Mochi card. Mochi now attempts to restore itself into already-open eligible tabs after an extension update or browser startup. A normal page refresh is still useful when a site was already open before Mochi was first installed, or when a protected page has not granted the extension access yet.

## Using Mochi

After installation, open the extension popup from the browser toolbar. The popup contains three controls:

| Control | Behavior |
| --- | --- |
| **Cat style** | Select one of the nineteen available companions. The selected style is applied to every eligible tab. |
| **Show cat** | Toggle Mochi’s visibility across eligible tabs. Turning it on actively injects Mochi into the current eligible tab, so a page refresh is usually unnecessary. |
| **Pause cat** | Freeze or resume the cat’s movement and animation everywhere. |

Mochi can be dragged directly on the page. Its position is clamped to the visible viewport and saved as a normalized placement, so the cat stays in the same relative spot when you switch to another tab or open a page with a different viewport size. Turning **Show cat** on from the popup also asks the current eligible tab to inject Mochi immediately.

The extension persists shared preferences with the browser’s local extension storage. If an older installation contains a style that is no longer available, Mochi automatically falls back to the current default style rather than leaving a tab without a valid asset.

## Cat styles

The current style inventory is listed below. Names are intentionally short so the selector remains easy to scan even when the popup is compact.

| Style | Asset stem |
| --- | --- |
| Bad Boy | `bad-boy` |
| Black Cat | `black-cat` |
| Rolling Cat | `bttv-rolling-cat` |
| Cream Cat | `little-cream-cat` |
| Frog Cat | `green-frog-cat` |
| Tiny Cat | `tiny-cute-cat` |
| Scarf Cat | `cat-in-a-scarf` |
| Cat Roll | `black-cat-roll` |
| Blue Spinner | `spinning-blue-cat` |
| Yawning Cat | `yawning-white-cat` |
| Pixel Cat | `gray-pixel-cat` |
| Blush Cat | `blushing-cute-cat` |
| Dancer | `dance-break` |
| Meme Cat | `blue-meme-cat` |
| Love Cat | `heart-love-cat` |
| Mewo | `mewo-omori` |
| Sleepy Cat | `white-sleeping-cat` |
| White Kitty | `white-kitty` |
| Bleh Cat | `bleh-cat` |

Each style uses two local files:

```text
assets/<style>.gif   # animated version
assets/<style>.png   # first-frame version used while paused
```

## Browser compatibility and limitations

Mochi targets Manifest V3-compatible Chromium browsers. The content script is configured for regular web pages, but browsers intentionally restrict extensions from injecting into browser-owned pages and other protected surfaces. Mochi therefore will not appear on pages such as `chrome://extensions`, the Chrome Web Store, or other restricted browser UI pages.

The extension uses `storage` for shared preferences and `scripting` plus `<all_urls>` host access to restore the same local content script into already-open eligible tabs after an extension update or browser startup. It does not fetch remote content or send page data anywhere. This recovery path avoids making users manually reload every page after Mochi is reloaded.

## Privacy

Mochi is designed as a local-only project. It does not include an account system, analytics, advertising, remote API calls, tracking pixels, or a server-side data store. The cat animations, logo, popup, and extension logic are shipped in the repository itself. The only persisted information is the small set of local preferences required to keep the experience consistent.

Because this README describes the current source tree rather than a hosted service, users should still review the code and manifest before installing any local extension. The repository is intentionally small enough to inspect directly.

## Development

Mochi does not require a build framework or package manager. The repository is a plain Manifest V3 extension made from HTML, CSS, JavaScript, and local image assets.

### Repository layout

| Path | Purpose |
| --- | --- |
| `manifest.json` | Extension metadata, popup wiring, icon declarations, permissions, and content-script registration. |
| `background.js` | Shared state manager that persists settings and broadcasts them across tabs. |
| `content.js` | Creates the on-page cat, handles dragging, and consumes synchronized state. |
| `cat.css` | Keeps the on-page cat above page content and defines its appearance and transitions. |
| `popup.html` | Popup structure, controls, official logo, and maker credit. |
| `popup.css` | Mochi’s monochrome popup styling. |
| `popup.js` | Popup event handling and communication with the background service worker. |
| `assets/` | Logo files, extension icons, animated GIFs, and paused PNG frames. |
| `verify_extension.py` | Lightweight repository checks for manifest, branding, assets, and source consistency. |
| `docs/screenshots/` | README showcase screenshots generated from the current UI and asset set. |

### Local verification

Run these commands from the repository root before opening a pull request:

```bash
node --check content.js
node --check popup.js
node --check background.js
python3 verify_extension.py
```

The verification script checks the Manifest V3 configuration, official Mochi logo paths, the complete nineteen-style inventory, matching GIF and PNG assets, shared-state code paths, and popup option counts.

### Packaging a local ZIP

To create a ZIP that can be archived or shared with another developer, run:

```bash
zip -qr ../Mochi-extension.zip . -x '.git/*'
unzip -tq ../Mochi-extension.zip
```

The ZIP is intended for local unpacking or development workflows. Browser stores may require additional listing, review, and packaging requirements beyond this repository.

## Contributing

Small improvements are welcome, especially new cat styles, accessibility refinements, browser-compatibility fixes, and documentation improvements. Please keep contributions focused and preserve Mochi’s lightweight, local-first behavior.

Before opening a pull request, verify that the extension still loads through **Load unpacked**, that the popup controls work across more than one eligible tab, and that all local checks pass. New cat styles should include both an animated `.gif` file and a paused `.png` frame, plus matching entries in `content.js`, `background.js`, `popup.html`, `README.md`, and `verify_extension.py`.

## Credits

Mochi is made by [Koustav Roy](https://github.com/koustavdatascience). The official project logo is stored at [`assets/mochi-logo.png`](assets/mochi-logo.png), and the extension icon sizes are generated from the same mark.

## References

[1]: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world "Chrome Extensions: Hello World tutorial"

[2]: https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3 "Chrome Extensions: What is Manifest V3?"

[3]: https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/part1-simple-extension "Microsoft Edge extensions: Build a simple extension"
