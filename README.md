# Mochi

Mochi is a small, offline-first Manifest V3 extension that places a tiny animated cat on your browser tabs. It has no accounts, analytics, network calls, notifications, or monetization.

> A little cat for your tabs, because the internet feels nicer with company :3

## Features

Mochi includes nineteen cat styles, draggable positioning, global visibility and pause controls, and shared preferences that stay synchronized across eligible tabs. The popup uses a bold monochrome solid UI built around Mochi’s official black cat logo.

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

The popup includes nineteen individual options: Bad Boy Cat, Black Cat, BTTV Rolling Cat, Little Cream Cat, Green Frog Cat, Tiny Cute Cat, Cat in a Scarf, Black Cat Roll, Spinning Blue Cat, Yawning White Cat, Gray Pixel Cat, Blushing Cute Cat, Dance Break Cat, Blue Meme Cat, Heart-Love Cat, Mewo from Omori, Sleeping White Cat, White Kitty, and Bleh Cat.

## Logo

The supplied black-and-white cat mark in `assets/mochi-logo.png` is Mochi’s official project logo. The same mark is used for the popup header and regenerated toolbar and extension-listing icons.

## Maker

Made by [Koustav Roy](https://github.com/koustavdatascience).
