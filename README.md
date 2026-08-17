# Mochi

Mochi is a small, offline-first Manifest V3 extension that places a tiny animated cat on your browser tabs. It has no accounts, analytics, network calls, notifications, or monetization.

> A little cat for your tabs, because the internet feels nicer with company :3

## Features

Mochi includes twelve cat styles, draggable positioning, global visibility and pause controls, and shared preferences that stay synchronized across eligible tabs. The popup uses a soft, kawaii-inspired solid UI with the supplied cat artwork as its icon and header image.

The extension uses each supplied animated GIF as a looping asset and its matching PNG as the paused frame. JavaScript swaps assets and moves the cat without using animation loops that consume unnecessary page resources.

## Load locally

1. Open `chrome://extensions` or `edge://extensions`.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose this `mochi` folder.
5. Open a normal web page; Mochi should appear near the bottom edge.

The toolbar popup provides **Show cat**, **Pause cat**, and **Cat style** controls. Changes are stored locally and broadcast to every eligible browser tab.

The extension cannot inject into browser-owned pages such as `chrome://extensions`, the Chrome Web Store, or other restricted browser surfaces. That is expected behavior.

## Local verification

From this directory, run:

```bash
node --check content.js
node --check popup.js
node --check background.js
python3 verify_extension.py
```

## Cat styles

The popup includes twelve individual options: Rolling Orange Cat, Tiny Calico, Gray Pixel Cat, Cute Sleeping Cat, Cat in a Scarf, Black-and-White Roll, Yawning Calico, Round Cute Cat, Blue Meme Cat, Mewo, Lying White Cat, and White Kitty.

## Maker

Made by [Koustav Roy](https://github.com/koustavdatascience).
