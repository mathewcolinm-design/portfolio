# Mathew Colin, portfolio

React + Vite + Tailwind CSS + Motion. Fonts: General Sans (Fontshare) and Geist Mono (Google Fonts).

## Run it

```
cd site
npm install      # first time only
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into site/dist
```

## Edit content

All text lives in [`src/data/content.ts`](src/data/content.ts): profile, stats, projects, experience, tools, skills and education.

**Add a project cover:** put an image in `public/work/` (for example `public/work/avitus.webp`) and set `cover: "/work/avitus.webp"` on that project. Without a cover, a tinted placeholder is drawn from the project's `hue`.

**Case study screenshots:** each project's `shots` list shows dashed "Screenshot to add" boxes on its case study page. These are placeholders until real images are wired in.

## Scroll theme

Each section has `data-section-theme="light"` or `"dark"`. Whichever section crosses the middle of the screen sets the theme on `<html>`, and every colour fades to the new palette over 0.7s. Palettes are the CSS variables at the top of [`src/index.css`](src/index.css). Logic: [`src/hooks/useScrollTheme.ts`](src/hooks/useScrollTheme.ts).
