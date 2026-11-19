---
name: Mathew Colin Portfolio
description: A quiet, white portfolio of four focused pages (Work, How I work, Path, Say hello) linked by navigation along the top; case studies read as stories, and words and flat grey tiles carry the work. Light mode only.
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
    fontSize: "30px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.05em"
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 2.8vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3.2vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body-lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
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
  figure:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.035em"
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
rounded:
  focus: "4px"
  md: "10px"
  node: "9999px"
spacing:
  row: "12px"
  row-lg: "16px"
  gutter-mobile: "20px"
  gutter: "24px"
  bar: "44px"
  chapter-head-plain: "40px"
  work-gap: "56px"
  chapter-head: "64px"
  work-gap-lg: "80px"
  chapter-top: "96px"
  chapter-end: "128px"
components:
  button-pill:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    typography: "{typography.body}"
    padding: "0 16px"
    height: "40px"
  button-pill-hover:
    backgroundColor: "{colors.tile-hover}"
  link-arrow:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  link-arrow-hover:
    textColor: "{colors.muted}"
  button-pill-current:
    backgroundColor: "{colors.tile-hover}"
  header:
    backgroundColor: "{colors.paper}"
    height: "64px"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  nav-link-current:
    textColor: "{colors.ink}"
  page-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    height: "44px"
  section-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    height: "44px"
  section-link-current:
    textColor: "{colors.ink}"
  story-step:
    textColor: "{colors.muted}"
    typography: "{typography.body-reading}"
    padding: "24px 0"
  result-row:
    textColor: "{colors.ink}"
    typography: "{typography.figure}"
    padding: "16px 0"
  work-tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.md}"
  ruled-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "12px 0"
  path-node:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.node}"
    size: "11px"
  path-node-current:
    backgroundColor: "{colors.ink}"
---

# Design System: Mathew Colin Portfolio

## Overview

**Creative North Star: "The Quiet Column"**

A white page, centred columns, and nothing raised off the ground. The site is four pages, each about one thing, read in order: Work (which opens on an oversized two-tone sentence), How I work, Path and Say hello. Each page ends by pointing to the next. Each case page is a story written in Markdown: The context, The challenge, How I approached it (numbered steps), The outcome (with results) and optionally What I learned, then Designs and Next project. Every chapter starts at a hairline with a large statement and then gives way to its content: flat grey work tiles on a wider measure, ruled lists and short muted paragraphs on a narrower reading measure. Navigation sits along the top: the header carries the page links (Work, How I work, Path) and a "Say hello" pill, with a hairline along its bottom edge that fills as you scroll. On phones the page links sit in a slim bar under the header. Case pages add a section bar under the header listing the story's sections, the current one underlined. There is no accent hue: the system is ink, two greys, white and one tile grey.

Density is low and the rhythm is long: 96 to 128px of air closes each chapter, 64 to 96px opens the next. Hierarchy comes from size and tone, never weight: large text is regular with tight negative tracking, and the second half of a large statement drops to a softer grey so one sentence reads as claim then context. Motion is slow-settling and small: Lenis-eased scrolling, a header hairline that fills with reading progress, a section underline that glides to the section being read, an arrow that travels 2px, an image that eases in by 2%. All of it stands down under reduced motion.

**Key Characteristics:**
- Pure white ground, near-black ink, body grey, and a soft grey reserved for large text.
- Geist everywhere, regular weight; medium only for the name wordmark and inline emphasis in story prose.
- Two centred measures: 760px for reading, 960px for work; the header and bars share the 960px measure.
- Chapters open with a hairline and a large statement; the header's ink hairline tracks reading progress.
- Flat grey tiles with 10px corners hold the work; no shadows anywhere.
- Thin Lucide strokes: arrows on links, a small plus on notes, hollow-to-solid dots on the path.

## Colors

A monochrome palette: white, near-black, two greys and two flat surface greys. No accent colour exists and none should be added.

### Primary
- **Ink** (`ink`): all primary text, the wordmark, the current page link and current case section, the scroll-progress line and section underline, the current path node, focus outlines, caret and accent colour, the skip link's fill.

### Neutral
- **Paper** (`paper`): the page ground, the solid header, the page bar and the section bar. The only background behind running content.
- **Muted Grey** (`muted`): supporting copy, story prose, step numerals, captions, meta (company, year, dates), inactive page and section links, footer text and the hover tone for ink links. Passes AA for body text on paper.
- **Soft Grey** (`soft`): the continuation half of a large two-tone statement, the large years on the Path (24px and up), and bullet markers in story lists. Too light for body text.
- **Hairline** (`hairline`): 1px rules that open chapters, separate list rows, steps and results, run down the Path, sit under the header once scrolled, under the page and section bars, and divide "All work" from the sections.
- **Tile Grey** (`tile`): work tiles and placeholders, and the "Say hello" pill.
- **Tile Pressed** (`tile-hover`): the pill's hover fill and its fill while on the Say hello page, one step darker than tile.
- **Field Grey** (`field`): a half step lighter than tile, kept for text inputs so a field never reads as a tile. No shipped surface uses it at present.

### Named Rules
**The No-Accent Rule.** The palette is ink and greys. Emphasis comes from tone (ink against muted) and size, never from a hue.

**The Soft-Is-Large Rule.** Soft grey appears only at 24px and up: the second half of a statement, or a large figure like a Path year. Text that needs to recede below that uses muted. (A list bullet is a mark, not text.)

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui fallback)
**Body Font:** Geist Variable
**Label/Mono Font:** none; figures use Geist with tabular numerals.

**Character:** One family at one weight. Large text is pulled tight (-0.035em to -0.045em) so a 60px sentence reads as dense and calm; small text keeps default tracking.

### Hierarchy
- **Wordmark** (500, 30px desktop / 26px mobile, line-height 1, -0.05em): the name in the header.
- **Display** (400, clamp 2.5rem to 3.75rem, 1.04, -0.045em): the page-opening statement on every site page and as each case title (name in ink, caption in soft).
- **Headline** (400, clamp 1.625rem to 2.5rem, 1.08, -0.035em): two-tone chapter openers on site pages ("Work." then its soft continuation), the "Next" page link and the not-found message.
- **Title** (400, clamp 1.6rem to 2.1rem, 1.12, -0.035em): plain, ink-only chapter openers on case pages (the story's section titles). The email address in Say hello sits near this scale (clamp 1.5rem to 2.5rem).
- **Figure** (400, clamp 1.5rem to 2rem, line-height 1, -0.035em): result values, right-aligned with tabular numerals. Path years sit near it (clamp 1.5rem to 1.75rem, -0.03em, soft).
- **Body Lead** (400, 18px, 1.625): the first story section's prose in ink, capped at 50ch; also step titles in ink.
- **Body** (400, 16px, 1.5): page links, subheads inside chapters, list rows, project names and meta, buttons, links.
- **Body Reading** (400, 16px, 1.625): muted paragraphs (story sections, step prose, Path entries, skills), capped at 54 to 56ch.
- **Label** (400, 15px): page-bar and section-bar links, step numerals, tile placeholder notes, the "Next" label of the next-page link, footer line, the copy hint.

Story prose is written in Markdown and supports **bold**, *italic* and links only. Bold renders at 500 in ink inside muted prose; links are ink with a hairline underline that darkens to ink on hover.

### Named Rules
**The One Weight Rule.** Everything is 400 except the wordmark and inline bold inside story prose, both at 500. Headings are never bold; hierarchy is size and ink-versus-grey.

**The Two-Tone Sentence Rule.** A large statement that opens a page or a site-page chapter is one sentence: the claim in ink, the continuation in soft grey, same size, same line. Case-page chapters open plain, ink only and a step smaller.

## Layout

Two centred measures, both with 20px side gutters (24px from 768px): a **text** measure of 760px content (808px with gutters) for statements, lists and paragraphs, and a **wide** measure of 960px content (1008px with gutters) for work tiles, case covers and design screens. The header, page bar and section bar sit on the wide measure; chapter hairlines and the footer sit on the text measure. Nothing is offset to one side.

Each site page opens with its display statement 56px below the header (96px from 768px) and 80px of air beneath (112px), with an optional note (the availability line on Work). A chapter is a section that begins with a hairline on the text measure, 64px of air (96px from 768px), then its statement. Content follows 48px below a two-tone opener (64px from 768px) or 32px below a plain one (40px), and the chapter closes with 96px (128px from 768px). Every site page ends with a hairline and the next-page link.

A case page opens with its display title, a ruled meta list (Company, Role, Timeline, Focus), then the cover tile on the wide measure. Its story follows as plain chapters: the first section's prose as an 18px ink lead, later sections in 16px muted prose. Steps under "How I approached it" are hairline-ruled rows, 24px padding, a 56px numeral column from 640px. Results sit inside the outcome section, 40px below its prose, as hairline rows. Designs and Next project close the page.

Work runs in a wide, pair, wide rhythm: one 16:9 tile across the wide measure, then two 4:5 tiles side by side with a 24px gap, the second dropped 96px so the eye zigzags down; 56px between rows (80px from 768px). Pairs stack below 768px. Supporting lists (Other work, What I do) are two hairline-ruled columns from 768px with a 40px gap.

Ruled lists are the default way to show structured facts (toolkit, education, case meta, results, pending screens): a hairline above the list and under every row, 12px row padding (16px for two-line rows), label left and value right with tabular numerals.

The Path is a vertical timeline on the text measure: one hairline the steps hang from, an 11px node per job, a 96px year column from 768px, and the entry beside it.

Navigation is pinned to the top. The 64px header is sticky on every page. From 768px the page links sit in the header; below 768px they move to a 44px sticky page bar directly beneath it. Case pages add a 44px sticky section bar under the header at every width (it replaces the page bar there). In-page jumps offset by the measured height of everything marked sticky, plus 24px.

**The Two Measures Rule.** Reading lives on the 760px measure, work on the 960px measure. Only the header and the sticky bars span the wide measure outside a work context.

## Elevation & Depth

The system is flat. No element casts a shadow and nothing is translucent. Separation is carried by hairlines (chapter tops, list rows, steps, results, the Path, under the bars) and by the tile-grey fill behind work. The header is solid paper; its hairline appears only after 8px of scroll and fades in over 300ms, and a 1px ink line along that edge fills left to right with page scroll.

**The Flat Ground Rule.** Depth is tone and line, never shadow. If something needs to stand apart, give it a tile fill or a hairline.

## Shapes

One corner radius, small and soft (10px), on everything with a fill: work tiles, placeholders, the pill and the skip link. Focus outlines use 4px with a 3px offset. The only circles are the Path nodes (11px, 1px ink ring; hollow for past roles, filled for the current one). Lines are 1px hairlines, plus the 16px vertical hairline divider in the section bar. Icons are thin Lucide strokes: up-right, left, up arrows and check at 1.5 stroke (15 to 16px), the next-page right arrow at 1.25 stroke (28px), the note plus at 1.25 stroke (14px).

## Components

### Buttons
- **Pill ("Say hello", header):** tile-grey fill, ink text, 10px corners, 40px tall, 16px side padding, a 16px up-right arrow after the label. Hover fades to the pressed grey over 300ms; on the Say hello page it holds the pressed grey and carries aria-current. It is the only filled button.

### Arrow Link
The site's call to action. Ink 16px text followed by a thin up-right arrow; on hover the text fades to muted and the arrow travels 2px in its direction on the expo-out ease over 300ms ("Open in your email app", "LinkedIn", "Back to the start"). Quiet muted variants with a left or up arrow serve "All work" and "Back to top".

### Next-Page Link
Closes every site page: a hairline on the text measure, 40px of air, "Next" (or "Back to the start" on the last page) in 15px muted, then the next page's name at headline scale with a 28px right arrow that travels 6px on hover over 500ms on the expo-out ease.

### Chapter Opener
A hairline on the text measure, then a large statement as the chapter heading. Site-page chapters use the two-tone headline; case chapters use the plain, ink-only title. It is the only section heading device; smaller subheads inside a chapter are plain 16px ink.

### Header and Scroll Progress
64px, solid paper, sticky, on the wide measure: wordmark left; on the right the page links (Work, How I work, Path; 16px, 28px apart, muted with ink hover, the current one ink with aria-current; hidden below 768px) and the pill. Work stays current on case pages. A 1px ink line along the header's bottom edge, full width, fills left to right with page scroll (spring-smoothed, stiffness 220, damping 40).

### Page Bar (below 768px)
A 44px sticky paper strip under the header with a hairline beneath: all four page links in 15px, 20px apart, muted with the current one in ink. It scrolls sideways if it overflows, with no visible scrollbar.

### Section Bar (case pages)
A 44px sticky paper strip under the header at every width, hairline beneath, on the wide measure. Left: a muted left arrow and "All work" (label hidden below 640px), then a 16px vertical hairline. Then the story's sections as 15px links, 20px apart, labels shortened ("The challenge" becomes "Challenge"), followed by Designs and Next. Muted with ink hover; the section whose top has passed 40% of the viewport is ink with aria-current and a 1px ink underline on the bar's bottom edge. The underline glides between sections as one shared element on a spring (stiffness 420, damping 38). No section is current before the first is reached; at the page bottom the last one is. On narrow screens the list scrolls sideways and keeps the current section in view. Links scroll to their section through Lenis.

### Story Prose
Markdown sections rendered as paragraphs and disc lists, 20px apart, line-height 1.625. The first section is the lead (18px ink, 50ch); the rest are 16px muted at 56ch. Inline bold is ink at 500, italic is italic, links are ink with a hairline underline.

### Story Step
A numbered row in "How I approached it": hairline above (and under the last), 24px vertical padding, a 56px column from 640px holding the two-digit numeral (01, 02) in 15px muted tabular figures, then the step title in 18px ink and its prose 8px below in 16px muted at 56ch. Below 640px the numeral sits above the title.

### Result Row
Results inside the outcome section: hairline-ruled rows, 16px padding, label left in 16px ink with an optional muted detail (inline after a middle dot from 640px, on its own line below), value right at figure scale with tabular numerals.

### Work Figure and Tile
- **Figure:** the tile first, then the project name left in ink and "Company · Year" right in muted, then a muted caption capped at 46ch. The whole figure is one link; on hover the name fades to muted and the image scales to 1.02 over 700ms.
- **Tile:** tile-grey fill, 10px corners, image cover-fitted. Ratios: 16:9 wide (16:7 when only a placeholder), 4:5 tall in pairs, 4:3 for small Other work tiles.
- **Placeholder:** when screens are not ready the tile says so: "Screens on the way" in 15px ink at the top, and the list of coming screens in muted at clamp 1.25rem to 1.75rem at the bottom, 24px inset (32px from 768px). A placeholder must always read as a placeholder. On case pages, screens still to come are listed beneath a muted line as a ruled list.

### Ruled List
Hairline above, hairline under each row, 12px row padding, label left in ink (or muted in a meta list), value right with tabular numerals. Two-column variant for short name-plus-line entries from 768px.

### Path Timeline
A single hairline down the left, an 11px ink-ringed node per role (the latest filled ink), the year in soft grey at clamp 1.5rem to 1.75rem, then "Role at Company" in ink with "at" in muted, dates and place in muted, and a muted paragraph.

### Copy Email
The address set large with a hairline underline that darkens to ink on hover; clicking copies it and swaps to a check and "Email copied" for two seconds, falling back to the mail app if the clipboard is unavailable. A 15px muted hint sits beneath.

### Footer
One hairline-topped line on the text measure, 24px padding: copyright left and "Back to top" with an up arrow right, both 15px muted.

### Content Source
All site text and images come from site/content (site.yml, one index.md per project, image folders), loaded and validated at start. If a file is wrong, the page shows a plain bordered box (10px corners, 24px padding, 640px wide) with the message instead of a blank screen.

### Scrolling
Lenis smooth scrolling on the root (lerp 0.09, wheel smoothing on) carries all in-page jumps. Under prefers-reduced-motion Lenis is not mounted, native scrolling applies and motion springs respect the user setting.

## Do's and Don'ts

### Do:
- **Do** tell a page as chapters: a hairline, a large statement, then the content.
- **Do** keep navigation along the top: page links in the header (in the page bar below 768px), case sections in the section bar, progress as the header's ink hairline.
- **Do** write case studies as stories in Markdown: context, challenge, numbered steps, outcome with results.
- **Do** keep reading on the 760px measure and work on the 960px measure, both centred.
- **Do** open pages and site-page chapters with a two-tone statement in regular weight, ink then soft grey; open case chapters plain.
- **Do** put work in flat tile-grey tiles with 10px corners, in the wide, pair, wide rhythm, and say plainly when screens are not ready yet.
- **Do** show structured facts as ruled lists with right-aligned, tabular values.
- **Do** switch off smooth scrolling and soften motion under prefers-reduced-motion.

### Don't:
- **Don't** add an accent colour, gradient or tinted surface; the palette is ink, greys and white.
- **Don't** use soft grey for text under 24px.
- **Don't** add shadows, glass or raised cards; depth is tone and hairlines.
- **Don't** bold headings; the only weights above 400 are the wordmark and inline bold in story prose.
- **Don't** add side or margin navigation, or a second navigation; pages live in the header, case sections in the section bar.
- **Don't** fall back to a hero, card grid, services row and logo strip.
