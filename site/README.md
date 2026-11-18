# Mathew Colin, portfolio

React + Vite + Tailwind CSS + Motion. Font: Manrope (self-hosted). Icons: Lucide and Simple Icons.
Layout and style follow the Tabfolio reference: pill tab navigation, a shared intro header, work framed on pastel gradient mats, and case studies with a pinned section tab bar.

## Run it

```
cd site
npm install      # first time only
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into site/dist
```

## Pages

| Route | File |
|---|---|
| `/` Work | `src/pages/Work.tsx` |
| `/experiments` | `src/pages/Experiments.tsx` |
| `/about` | `src/pages/About.tsx` |
| `/resume` | `src/pages/Resume.tsx` |
| `/work/<slug>` case study | `src/pages/CaseStudy.tsx` |

## Edit content

All text lives in [`src/data/content.ts`](src/data/content.ts).

## Add your screenshots

1. Put images in `public/work/<slug>/`, for example `public/work/tetra/cover.webp`. WebP at about 2000px wide is ideal.
2. In `content.ts`, set the project's `cover: "/work/tetra/cover.webp"` for the grid card and case study hero.
3. For the case study gallery, add `src` to each entry in `shots`, e.g. `{ label: "Trading screen", src: "/work/tetra/trading.webp" }`.
4. Experiments work the same way: set `src` on each item in `experiments`.

Anything without an image shows a labelled "Screens coming soon" placeholder on its gradient mat.

## Light and dark

Each section has `data-section-theme="light"` or `"dark"`. Dark is used where the work is shown and where visitors linger (project grid, results and design galleries, experiments, career history). A section takes over once its top passes 30% down the screen, and the colours cross-fade over 0.7s. Palettes are the CSS variables at the top of [`src/index.css`](src/index.css); logic is in [`src/hooks/useScrollTheme.ts`](src/hooks/useScrollTheme.ts).
