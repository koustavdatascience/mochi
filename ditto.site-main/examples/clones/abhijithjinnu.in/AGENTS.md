# AGENTS.md

This is a generated ditto.site clone app for https://www.abhijithjinnu.in/. It is a static Vite React project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

## Run

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`

## Safe Edit Areas

- `src/content.ts` or `src/content.tsx`: editable structured content extracted from repeated components and sections when present.
- `src/components/`: generated component modules. Edit copy, links, and simple JSX structure with care.
- `src/sections/`: generated section modules for single-page section splits when present.
- `src/svgs/`: hoisted inline SVG modules. Edit only when intentionally changing artwork.
- `src/ditto.css`: fidelity CSS for captured layout, pseudos, keyframes, and interaction states. Small visual tweaks are reasonable; broad rewrites can break clone fidelity.
- Root SEO/docs files such as `AGENTS.md`, `ARCHITECTURE.md`, and `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt`.

## Generated Runtime

`src/ditto` contains generated runtime utilities for captured interactions and motion. Current runtime utilities: DittoMotion. Do not casually rewrite these files; they are plumbing that maps captured recipes to stable `data-ditto-id` anchors in delivered apps.

## File Meanings

- `src/page.tsx`: generated route bodies.
- `src/content.ts`: structured data extracted from repeated clone regions.
- `src/components/`: reusable JSX components promoted from repeated captured subtrees.
- `src/sections/`: page sections split from the captured body.
- `src/svgs/`: inline SVGs hoisted out of page/section files.
- `src/ditto.css`: generated CSS that preserves source layout and visual details not represented by Tailwind utilities.
- `src/ditto-meta.ts`: delivered-app metadata for anchors that still need runtime or stylesheet targeting after validation-only ids are stripped.

## Routes

- / - Product & Design-First Software Engineer | Abhijith

## Do Not Edit Casually

- `src/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
