# Mathew Colin, portfolio

React + Vite + Tailwind CSS + Motion + Lenis. Font: Geist (self-hosted). Icons: Lucide.
The site is one story told in chapters, with a progress rail that shows where you are. Style: white ground, near-black ink, two-tone statements, hairline dividers, flat grey work tiles. Light mode only.

## Run it

```
cd site
npm install      # first time only
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into site/dist
```

## Structure

| Route | File | Chapters |
|---|---|---|
| `/` | `src/pages/Story.tsx` | Work, How I work, Path, Say hello |
| `/work/<slug>` | `src/pages/Case.tsx` | Overview, Process, Results, Designs, Next |

- **Progress rail:** `src/components/chapters.tsx`. On desktop it sits in the right margin; its hairline fills as you scroll and the current chapter steps forward. On phones it becomes a slim bar under the header with the chapter name and "2 / 4".
- **Smooth scrolling:** Lenis, set up in `src/App.tsx` (`lerp: 0.09`; lower is smoother and slower). It is switched off for visitors whose device asks for reduced motion.
- **Old links:** `/projects`, `/about`, `/contact`, `/resume`, `/experiments` and `/projects/<slug>` redirect to the matching chapter or case study.

## Edit content

All text lives in [`src/data/content.ts`](src/data/content.ts): the opening statement, chapter lines, projects, other work, services, toolkit, career path, education and skills.

## Add your screenshots

1. Put images in `public/work/<slug>/`, for example `public/work/tetra/cover.webp`. WebP at about 2000px wide is ideal.
2. In `content.ts`, set the project's `cover: "/work/tetra/cover.webp"`. On the home page, projects alternate one wide tile (16:9) and a pair of tall tiles (4:5), so crop covers to suit their position: 1st and 4th wide, the rest tall.
3. For a case study's Designs chapter, add `src` to entries in `shots`, e.g. `{ label: "Trading screen", src: "/work/tetra/trading.webp" }`. Shots without an image are listed as "Screens on the way".
4. "Other work" items show a tile once you set `src`.
