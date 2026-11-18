---
name: Mathew Colin Portfolio
description: A quiet, white, centred single-column portfolio where words and flat grey tiles carry the work. Light mode only.
colors:
  ink: "#0a0a0a"
  paper: "#ffffff"
  muted: "#666666"
  soft: "#8a8a8a"
  hairline: "rgb(0 0 0 / 0.08)"
  tile: "#f2f2f2"
  tile-hover: "#e8e8e8"
  field: "#f5f5f5"
typography:
  wordmark:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.05em"
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  body-reading:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
rounded:
  focus: "4px"
  md: "10px"
spacing:
  row: "12px"
  row-lg: "16px"
  gutter-mobile: "20px"
  gutter: "24px"
  title-gap: "36px"
  stack: "56px"
  section: "80px"
  section-lg: "96px"
components:
  button-pill:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    typography: "{typography.body}"
    padding: "0 16px"
    height: "42px"
  button-pill-hover:
    backgroundColor: "{colors.tile-hover}"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    typography: "{typography.body}"
    padding: "0 20px"
    height: "48px"
    width: "100%"
  link-arrow:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  link-arrow-hover:
    textColor: "{colors.muted}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  nav-link-active:
    textColor: "{colors.ink}"
  work-tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.md}"
  input-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    typography: "{typography.body}"
    padding: "12px 16px"
  chip-skill:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    typography: "{typography.label}"
    padding: "8px 14px"
---

# Design System: Mathew Colin Portfolio

## Overview

**Creative North Star: "The Quiet Column"**

A white page, one centred reading column, and nothing raised off the ground. Every page is a stack of sections separated by full-frame hairlines; inside each, a 720px column holds a plus-marked title, a two-tone statement or a ruled list, and at most one up-right arrow link. The work sits in flat light-grey tiles with small corners, and the tiles do the only "framing" on the page. There is no accent hue: the system is ink, two greys, white, and one tile grey.

Density is low and the rhythm is generous: 80 to 96px between hairlines, 56px between stacked works. Hierarchy comes from size and tone, never weight: large text is set regular with tight negative tracking, and the second half of a large statement drops to a softer grey so one sentence reads as claim then context. Motion is small and slow-settling: an arrow that travels two pixels up-right, an image that eases in by 2%, colour that fades over 300ms.

**Key Characteristics:**
- Pure white ground, near-black ink, body grey, and a soft grey reserved for large text.
- Geist everywhere, regular weight; medium only for the name wordmark.
- Centred 720px column inside a 1120px frame; hairlines span the frame, content stays in the column.
- Flat grey tiles with 10px corners hold the work; no shadows anywhere.
- Thin plus marks beside section titles and metadata; thin up-right arrows on text links.

## Colors

A monochrome palette: white, near-black, two greys and two flat surface greys. No accent colour exists and none should be added.

### Primary
- **Ink** (`ink`): all primary text, the wordmark, active nav, the solid submit button's fill, focus outlines, caret and form accent colour.

### Neutral
- **Paper** (`paper`): the page ground and the header (at 88% opacity behind a blur). The only background behind running content.
- **Muted Grey** (`muted`): body copy under a title, captions, metadata (focus, year, dates), inactive nav and footer links, and the hover tone for ink links. Passes AA for body text on paper.
- **Soft Grey** (`soft`): only the continuation half of a large two-tone statement (24px and up). It is too light for body text.
- **Hairline** (`hairline`): 1px rules between sections, under the header, and between rows of every list.
- **Tile Grey** (`tile`): work tiles, the header pill, skill chips and the in-section call-to-action band.
- **Tile Pressed** (`tile-hover`): the pill button's hover fill, one step darker than tile.
- **Field Grey** (`field`): text input and textarea fills, a half step lighter than tile so fields and tiles never read as the same object.

### Named Rules
**The No-Accent Rule.** The palette is ink and greys. Emphasis comes from tone (ink against muted) and size, never from a hue.

**The Soft-Is-Large Rule.** Soft grey appears only in statements of 24px and up, as the second half of a sentence. Body text that needs to recede uses muted, never soft.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui fallback)
**Body Font:** Geist Variable
**Label/Mono Font:** none; figures use Geist with tabular numerals.

**Character:** One family at one weight. Large text is pulled tight (-0.04em) so a 40px statement reads as dense and calm; small text is left at default tracking.

### Hierarchy
- **Wordmark** (500, 34px desktop / 28px mobile, line-height 1, -0.05em): the name in the header; the footer repeats it at 26px. The only medium-weight text on the site.
- **Display** (400, clamp 2rem to 2.5rem, 1.08, -0.04em): the opening two-tone statement on Home, About, Contact and the closing band; case-study titles use the same scale at 1.05.
- **Headline** (400, clamp 1.75rem to 2.25rem, 1.1, -0.04em): secondary two-tone statements inside sections (Home about, case-study overview).
- **Body** (400, 16px, 1.5): section titles, list rows, nav, buttons, links, form labels. Nearly everything below a statement is 16px.
- **Body Reading** (400, 16px, 1.625): muted paragraphs, capped at 54ch.
- **Label** (400, 15px): footnotes, placeholder text inside tiles, the copyright line, skill chips.

### Named Rules
**The One Weight Rule.** Everything is 400 except the wordmark at 500. Hierarchy is size and ink-versus-grey, never bold.

**The Two-Tone Sentence Rule.** A large statement is one sentence: the claim in ink, the continuation in soft grey, in the same size and line.

## Layout

A 1120px frame (20px side gutters on mobile, 24px from 768px) holds the header, hairlines and footer. All content sits in a centred 720px column inside it, never offset to one side. Each section is a hairline-topped band with 80px vertical padding (96px from 768px); the first section on a page drops the hairline. A section title sits 36px above its content. Works stack in a single column with 56px between them; there are no card grids.

Ruled lists are the default way to show structured information (services, jobs, toolkit, case-study meta, results): a hairline above the list and under every row, 12 to 16px row padding, label left and value right-aligned with tabular numerals. The footer is the only multi-column block: a 1.4fr / 1fr / 1fr grid from 640px, stacked below.

The header is sticky, 72px tall, with the wordmark left and nav plus pill right; below 768px the nav collapses to a menu button that drops a full-width panel of 22px links.

**The Centre Column Rule.** Content never leaves the 720px column; only hairlines, the header and the footer span the full frame.

## Elevation & Depth

The system is flat. No element casts a shadow. Separation is carried by hairlines between sections and rows, and by the tile-grey fill behind work, chips, buttons and fields. The single translucency is the sticky header: white at 88% with a medium backdrop blur, so content slides under it without a rule of its own beyond its bottom hairline.

**The Flat Ground Rule.** Depth is tone and line, never shadow. If something needs to stand apart, give it a tile fill or a hairline.

## Shapes

One corner radius, small and soft (10px), on everything with a fill: work tiles, the pill button, the solid button, fields, skill chips and the call-to-action band. Focus outlines use a tighter 4px radius with a 3px offset. Lines are 1px hairlines. Icons are thin outline strokes (plus marks at 1.25 stroke, 12 to 14px; arrows, menu and check at 1.5 stroke, 16 to 22px).

## Components

### Buttons
- **Pill (header "Get in touch"):** tile-grey fill, ink text, 10px corners, 42px tall, 16px side padding, a 16px up-right arrow after the label. Hover fades to the pressed grey over 300ms. It is the only filled button in the chrome.
- **Solid (form submit):** full-width ink fill, white text, 48px tall, 10px corners. Hover drops to 85% opacity; disabled sits at 40%.

### Arrow Link
The site's main call to action. Ink 16px text followed by a thin up-right arrow. On hover the text fades to muted and the arrow travels 2px up and right on the expo-out ease. Used for "Get in touch", "See all projects", "More about me" and similar; one per section.

### Section Title
A 14px thin plus mark, then the title in ink and an optional one-line continuation in muted directly beneath, both at 16px. It is the only section heading device on the site.

### Work Item and Tile
- **Item:** project name left in ink, focus and year right in muted separated by a 12px plus, a 10px gap, the tile, then a muted caption. The whole item is one link; on hover the name fades to muted and the image scales to 1.02 over 700ms.
- **Tile:** tile-grey fill, 10px corners, 720 / 590 aspect ratio by default, image cover-fitted. With no image it shows a centred 15px muted line ("Screens coming soon") so a placeholder reads as a placeholder.

### Chips
Skill tags on About: tile-grey fill, ink 15px text, 10px corners, 8px by 14px padding, wrapping with 8px gaps. Non-interactive.

### Inputs / Fields
- **Style:** field-grey fill, no visible border, 10px corners, 12px by 16px padding, 16px ink text; labels sit above in ink at 16px with optional hints in muted.
- **Focus:** a 1px ink ring fades in over 300ms.

### Navigation
Header links are 16px muted, turning ink on hover and when active. The footer repeats the wordmark beside "Navigate" and "Connect" columns of muted links. "Copy email" swaps to a check and "Email copied" for two seconds.

## Do's and Don'ts

### Do:
- **Do** keep every page a centred 720px column inside the 1120px frame, with hairlines between sections.
- **Do** set large statements in regular weight with -0.04em tracking, ink then soft grey.
- **Do** put work in flat tile-grey tiles with 10px corners, and say plainly when screens are not ready yet.
- **Do** mark section titles with the thin plus and give them a muted one-line continuation.
- **Do** use the up-right arrow link as the call to action, one per section.
- **Do** show structured facts as ruled lists with right-aligned, tabular values.

### Don't:
- **Don't** add an accent colour, gradient or tinted surface; the palette is ink, greys and white.
- **Don't** use soft grey for text under 24px.
- **Don't** add shadows or raised cards; depth is tone and hairlines.
- **Don't** bold headings; the only weight above 400 is the wordmark.
- **Don't** break the column into split heroes, stat rows or multi-column card grids.
