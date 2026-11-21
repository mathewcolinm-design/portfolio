# Mathew Colin, portfolio: version 2 (numbers first)

The same site as `site/`, in the same design (white ground, black ink, greys, Geist, hairlines, flat grey tiles), with the numbers brought forward. It reads **the same words and images** from `../site/content/`, so one edit there updates both versions.

What's different from version 1:

- **Work page:** an "In numbers" chapter under the opening statement, a bento of flat grey tiles. The first figure takes the large tile; tiles linked to a project open its case study. Figures count up once as they come into view.
- **Project tiles:** results show under the caption. Projects without screens show their figures inside the "Screens on the way" tile.
- **Case studies:** a strip of facts in joined cells (company, role, timeline, focus), then an Impact chapter of large figures right after the cover, then the story as before.

UI references: 21st.dev's "Monochrome Stats Hero" (hairline-joined stat cells) and "Stats Bento" (mixed-size stat tiles), redrawn in this site's own style.

## Run it

```
cd site-v2
npm install      # first time only
npm run dev      # http://localhost:5174 (version 1 uses 5173)
npm run build    # production build into site-v2/dist
```

## Where things are

- `src/components/numbers.tsx`: `CountUp`, `FigureBento`, `FactStrip`.
- `src/pages/Work.tsx`: the In numbers chapter. `src/pages/Case.tsx`: facts strip and Impact.
- `src/data/content.ts`: the loader, pointed at `../site/content`; adds `highlights` from the `numbers:` list in `site.yml`.
- Everything else matches `site/src`. The design system is the root `DESIGN.md`.
