# ARCHITECTURE.md

## Overview

This app is a generated ditto.site clone. The generator captured the source page, normalized the rendered DOM into an IR, inferred assets/tokens/sections/recipes, and emitted a static Vite React project.

## Structure

- `index.html` and route HTML files: Vite HTML entries with captured language, metadata, JSON-LD, and body attributes.
- `src/page.tsx`: generated route bodies.
- `src/globals.css`: reset, font faces, design tokens, and global page base.
- `src/ditto.css`: route or page fidelity CSS.
- `src/content.ts`: editable data layer when repeated regions were promoted.
- `src/components/`, `src/sections/`, `src/svgs/`: generated JSX modules.
- `src/ditto/`: runtime helpers for interaction and motion recipes.
- `public/assets/cloned/`: materialized source assets.

## Styling

The generator uses Tailwind classes for declarations that can be represented as stable utilities. Some styles remain in `ditto.css` because they are route-scoped, pseudo-element based, keyframe based, interaction-state based, or too specific to translate safely without changing the rendered result.

## Anchors

`data-ditto-id` exists in delivered apps where runtime utilities or generated CSS still need a stable DOM anchor. Validation-only capture ids are stripped from production output and should not be reintroduced.

## Recipes And Runtime

Recipes identify higher-level patterns such as repeated cards, logo clouds, navigation, disclosures, accordions, tabs, carousels, and motion. Sections and components provide editable structure, SVG modules preserve source artwork, and `src/ditto` applies the small runtime behaviors that were captured safely. Runtime utilities emitted for this clone: DittoMotion.

## Clone Metadata

- routes: 1
- extracted components: 3
- section modules: 4
- SVG modules: 6
- content module: yes
- component extraction requested: yes

## Routes

- / - Product & Design-First Software Engineer | Abhijith

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
