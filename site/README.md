# Mathew Colin, portfolio

React + Vite + Tailwind CSS + Motion + Lenis. Font: Geist (self-hosted). Icons: Lucide.
The site is four focused pages (Work, How I work, Path, Say hello) read in order, with a rail that shows where you are. Style: white ground, near-black ink, two-tone statements, hairline dividers, flat grey work tiles. Light mode only.

## Run it

```
cd site
npm install      # first time only
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into site/dist
```

## Structure

| Route | File | What's on it |
|---|---|---|
| `/` | `src/pages/Work.tsx` | Opening statement, projects, other work |
| `/how` | `src/pages/How.tsx` | What I do, toolkit |
| `/path` | `src/pages/Path.tsx` | Career timeline, education, skills |
| `/hello` | `src/pages/Hello.tsx` | Email and LinkedIn |
| `/work/<slug>` | `src/pages/Case.tsx` | Case study chapters: Overview, What I did, Results, Designs, Next project |

- **Rail:** `src/components/chapters.tsx`. On desktop it lists the four pages in the right margin; the current one steps forward and its line fills as you scroll. On phones the pages sit in a slim bar under the header. On case studies the rail tracks the chapters instead. Each page ends with a "Next" link.
- **Smooth scrolling:** Lenis, set up in `src/App.tsx` (`lerp: 0.09`; lower is smoother and slower). It is switched off for visitors whose device asks for reduced motion.
- **Old links:** `/projects`, `/about`, `/contact`, `/resume`, `/experiments` and `/projects/<slug>` redirect to the matching page or case study.

## Edit content

All text lives in [`src/data/content.ts`](src/data/content.ts): the opening statement, chapter lines, projects, other work, services, toolkit, career path, education and skills.

## Add your screenshots

1. Put images in `public/work/<slug>/`, for example `public/work/tetra/cover.webp`. WebP at about 2000px wide is ideal.
2. In `content.ts`, set the project's `cover: "/work/tetra/cover.webp"`. On the home page, projects alternate one wide tile (16:9) and a pair of tall tiles (4:5), so crop covers to suit their position: 1st and 4th wide, the rest tall.
3. For a case study's Designs chapter, add `src` to entries in `shots`, e.g. `{ label: "Trading screen", src: "/work/tetra/trading.webp" }`. Shots without an image are listed as "Screens on the way".
4. "Other work" items show a tile once you set `src`.
