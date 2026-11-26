# Certinal rebrand: presentation

Everything behind the Certinal case study in the portfolio, in one place: the brand assets, the source of every board and mockup, the rendered images and the story.

Style reference: the "Flaren – Brand Identity" project on Behance (dark ground, one accent family, construction drawings, monospaced labels, a long run of mockups). Only the presentation style was borrowed. Every logo, colour and fact here is Certinal's.

## What's here

| Folder / file | What it holds |
|---|---|
| `assets/` | The new logo and icon (SVG, from certinal.com), the old 2023 logo (from the Internet Archive), Geist, and screenshots of certinal.com in `web/` |
| `boards/` | One HTML file per image, sharing `brand.css`. Open any of them in Chrome to see it |
| `export/` | The rendered images: `.png` (full size) and `.webp` (for the web) |
| `story.md` | The rebrand story and the image order, for the portfolio or a Behance post |
| `render.mjs` | Renders the boards to `export/` |

Boards 01–07 present the identity (cover, before and after, construction, the layered fill, colour, colourways, pattern). Boards 08–15 are applications: stationery, app icons, the website on a laptop and a phone, website sections, a social profile, an event badge and a booth. The website images are real screenshots of certinal.com; stationery, social, badge and booth are presentation mockups built from the real logo.

## Change and re-render

```
cd ~/Documents/Mine/Claude/certinal-rebrand
npm install                      # first time only
npm run render                   # every board
node render.mjs 08-stationery    # just one
```

Then copy the new `.webp` files from `export/` into `site/content/projects/certinal-brand/screens/` (keeping the names that are already there) and the cover into `cover.webp`.

Colours, fonts and the ring pattern live in `boards/brand.css`. The six greens are `--g1` (#01B46D) to `--g6` (#CDF757).
