# Mathew Colin, portfolio

React + Vite + Tailwind CSS + Motion. Font: Geist (self-hosted). Icons: Lucide.
Style follows the Formo reference (white ground, black ink, two-tone statements, hairline dividers, grey work tiles), with all content in one centred column. Light mode only.

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
| `/` Home | `src/pages/Home.tsx` |
| `/projects` (case studies and other work) | `src/pages/Projects.tsx` |
| `/projects/<slug>` case study | `src/pages/Project.tsx` |
| `/about` (bio and résumé) | `src/pages/About.tsx` |
| `/contact` | `src/pages/Contact.tsx` |

Old links (`/work/<slug>`, `/resume`, `/experiments`) redirect to the new pages.

## Edit content

All text lives in [`src/data/content.ts`](src/data/content.ts). The home page shows the projects listed in `featured`; the Projects page shows all of them.

## Add your screenshots

1. Put images in `public/work/<slug>/`, for example `public/work/tetra/cover.webp`. WebP at about 2000px wide is ideal.
2. In `content.ts`, set the project's `cover: "/work/tetra/cover.webp"` for its tile and case study.
3. For the case study's Designs section, add `src` to each entry in `shots`, e.g. `{ label: "Trading screen", src: "/work/tetra/trading.webp" }`.
4. "Other work" on the Projects page works the same way: set `src` on each item in `experiments`.

Anything without an image shows a grey tile that says "Screens coming soon".

## Contact form

There is no server. The form on `/contact` opens the visitor's email app with their message filled in, addressed to Mathew.
