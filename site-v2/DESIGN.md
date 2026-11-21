---
name: Mathew Colin Portfolio, version 2
description: The Quiet Column in violet. White pages of Geist set in centred columns, where the work and its numbers open into deep aubergine fields as you scroll. One violet carries actions and figures. Light mode only.
colors:
  violet: "#6b3cf0"
  violet-hover: "#5a2fd6"
  deep: "#150c27"
  on-deep: "#f5f1ff"
  on-deep-muted: "#b6aad6"
  on-deep-soft: "#8e82b3"
  deep-line: "rgb(255 255 255 / 0.12)"
  deep-tile: "rgb(255 255 255 / 0.06)"
  ink: "#0e0b16"
  paper: "#ffffff"
  muted: "#565164"
  soft: "#7a748a"
  hairline: "rgb(30 16 60 / 0.09)"
  tile: "#f3f1f7"
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
  figure-impact:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 10vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\""
  figure-numbers:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 4.6vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\""
  figure-tile:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\""
  numeral:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\""
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
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
rounded:
  focus: "4px"
  button: "10px"
  tile: "12px"
  field-arriving: "36px"
  node: "9999px"
spacing:
  row: "12px"
  row-lg: "16px"
  gutter-mobile: "20px"
  gutter: "24px"
  bar: "44px"
  header: "64px"
  step-card: "28px"
  field-pad: "80px"
  field-pad-lg: "112px"
  chapter-head: "64px"
  chapter-top: "96px"
  chapter-end: "128px"
components:
  button-primary:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    typography: "{typography.body}"
    padding: "0 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.violet}"
  button-primary-current:
    backgroundColor: "{colors.violet}"
  link-arrow:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  link-arrow-hover:
    textColor: "{colors.violet}"
  header:
    height: "64px"
  header-scrolled:
    backgroundColor: "{colors.paper}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  nav-link-current:
    textColor: "{colors.ink}"
  section-bar:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    height: "44px"
  section-bar-scrolled:
    backgroundColor: "{colors.paper}"
  section-link-current:
    textColor: "{colors.ink}"
  bloom-field:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.on-deep}"
    padding: "80px 0"
  bloom-field-arriving:
    rounded: "{rounded.field-arriving}"
  impact-cell:
    textColor: "{colors.on-deep}"
    typography: "{typography.figure-impact}"
    padding: "40px 40px 40px 0"
  numbers-cell:
    textColor: "{colors.on-deep}"
    typography: "{typography.figure-numbers}"
    padding: "32px 32px 32px 0"
  fact-cell:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "20px 24px 20px 0"
  step-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "28px"
  step-numeral:
    textColor: "{colors.violet}"
    typography: "{typography.numeral}"
  work-tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
  work-tile-deep:
    backgroundColor: "{colors.deep-tile}"
    rounded: "{rounded.tile}"
  placeholder-figure:
    textColor: "{colors.violet}"
    typography: "{typography.figure-tile}"
  ruled-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "12px 0"
  path-node:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.node}"
    size: "11px"
  path-node-current:
    backgroundColor: "{colors.violet}"
---

# Design System: Mathew Colin Portfolio, version 2

## Overview

**Creative North Star: "The Quiet Column, in Violet"**

Version 2 keeps the world of version 1 (white ground, centred columns, Geist at one weight, hairlines, flat tiles, chapters that open on a large statement) and adds one hue and one material. The hue is a single violet, used for what you can act on and for the figures that prove the work. The material is a deep aubergine field: whole regions of the page (career numbers, a case's Impact, its Designs, the closing "Say hello") that open from an inset rounded panel to full bleed as they scroll into view. White reading columns alternate with deep fields, and the page reads as quiet text that turns into evidence as you scroll.

Case studies are data-forward. Each one runs: a two-tone title, a four-cell facts row, the cover when there is one, an Impact field of oversized figures when the project has results, story chapters with the title held sticky on the left and numbered step cards in a hairline grid, the Designs gallery on deep violet, then the next project. Density stays low. Hierarchy still comes from size and tone, never weight. Violet carries emphasis on white. On deep, a lighter lilac does.

Motion is slow, scroll-linked and settles once. A lavender glow behind each page opening swells, sinks and fades as you leave the top. Fields open as they arrive and stay open while you read them. Figures count up once on entry. A violet hairline under the header fills with reading progress. Under reduced motion all of it stands down: Lenis is not mounted, fields are shown open, the glow is static and figures show their final value.

**Key Characteristics:**
- White ground, violet-tinted ink and greys, one violet, one deep aubergine.
- Geist regular everywhere; 500 only for the wordmark and inline bold in story prose.
- Two centred measures: 760px for reading, 960px for work, fields and case pages.
- Deep fields bloom from an inset rounded panel to full bleed and carry the numbers and the screens.
- Oversized tabular figures that count up once, in on-deep white on fields and violet on white.
- Flat: no shadows, no blur, no glass. The pinned lavender glow is the one soft light.

## Colors

One violet and one deep aubergine on white, with every neutral nudged toward violet so the greys belong to the hue.

### Primary
- **Signal Violet** (`violet`): the reading-progress line, the section bar's current-section underline, step numerals, figures on placeholder tiles and inline result values under work tiles, the current Path node, hover state for arrow links, project names and the next-page link, the pill's hover and current fill, focus outlines, caret and form accent. Selection is a 18% wash of it.
- **Violet Pressed** (`violet-hover`): a step darker, for a pressed violet surface.

### Secondary
- **Deep Aubergine** (`deep`): the Bloom fields (In numbers, Impact, Designs, the closing Say hello) and the resting fill of the "Say hello" pill. It always covers a whole region or a whole button, never a text colour on white.
- **On-Deep White** (`on-deep`): headings, figures and body text inside fields; the focus outline inside fields.
- **On-Deep Lilac** (`on-deep-muted`): supporting copy on deep: metric labels and details, captions, the copy hint, footer line, link hover.
- **On-Deep Dusk** (`on-deep-soft`): the soft half of a two-tone statement inside a field. Large text only (24px and up).
- **Deep Line** (`deep-line`) and **Deep Tile** (`deep-tile`): hairlines and tile fills inside fields, as translucent white so they take the field's colour.

### Neutral
- **Paper** (`paper`): the page ground, the scrolled header and bars, step-card fill, text on the deep pill.
- **Violet Ink** (`ink`): primary text, the wordmark, current page and section links.
- **Muted** (`muted`): supporting copy, story prose, meta, fact labels, inactive links, footer text. Passes AA for body text on paper.
- **Soft** (`soft`): the continuation half of a large two-tone statement and Path years. Only 24px and up; list bullets and the middle-dot separator are marks, not text.
- **Hairline** (`hairline`): chapter tops, ruled rows, the facts row, step-card gutters, the Path line, the scrolled edge under the header and bars.
- **Tile** (`tile`): work tiles and placeholders on white.

### Named Rules
**The One Violet Rule.** Violet is the only hue. On white it marks what you can act on and what was achieved, never decoration or a background region. A new hue, or a second shade of violet as a fill on white, breaks the system.

**The Deep Owns Regions Rule.** Deep aubergine is a field or the one filled button. It is never a card, a strip, a text colour or a border on white.

**The Soft-Is-Large Rule.** `soft` and `on-deep-soft` appear only at 24px and up. Smaller receding text uses `muted` on white and `on-deep-muted` on deep.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui fallback)
**Body Font:** Geist Variable
**Label/Mono Font:** none; figures and numerals use Geist with tabular numerals.

**Character:** One family at one weight. Large text is pulled tight (-0.035em to -0.045em) so even a 120px figure reads calm, not loud. Small text keeps default tracking.

### Hierarchy
- **Wordmark** (500, 30px desktop / 26px mobile, 1, -0.05em): the name in the header.
- **Display** (400, clamp 2.5rem to 3.75rem, 1.04, -0.045em): the two-tone statement that opens every page and case, and the closing "Say hello" field.
- **Headline** (400, clamp 1.625rem to 2.5rem, 1.08, -0.035em): two-tone chapter and field openers ("Work.", "In numbers.", "Impact.", "Designs."), the next-page link, the not-found message.
- **Title** (400, clamp 1.6rem to 2.1rem, 1.12, -0.035em): plain, ink-only story chapter titles on case pages and "Next project". The copy-email address sits near this scale (clamp 1.5rem to 2.5rem).
- **Figure, Impact** (400, clamp 4rem to 7.5rem, 0.9, -0.04em, tabular): a case's result figures on its Impact field.
- **Figure, Numbers** (400, clamp 3rem to 4rem, 0.95, -0.04em, tabular): the four career figures on Work.
- **Figure, Tile** (400, clamp 2rem to 3.75rem, 1, -0.04em, tabular, violet): result figures on a placeholder work tile.
- **Numeral** (400, 2rem, 1, -0.04em, tabular, violet): step-card numbers (01, 02). The process list on How I work uses a smaller 15px violet numeral.
- **Body Lead** (400, 18px, 1.625): the first story section in ink (50ch), step and stage titles, metric labels on Impact, the Path intro.
- **Body** (400, 16px, 1.5): links, list rows, project names and meta, fact values, buttons.
- **Body Reading** (400, 16px, 1.625): muted paragraphs at 54 to 56ch.
- **Label** (400, 15px): section-bar and page-bar links, fact labels, metric labels on tiles, "Screens on the way", the "Next" label, footer line, copy hint.

### Named Rules
**The One Weight Rule.** Everything is 400 except the wordmark and inline bold in story prose (500). Figures get size, not weight.

**The Two-Tone Sentence Rule.** A page, site chapter or field opens with one sentence: the claim in ink (or on-deep white), the continuation in soft (or on-deep dusk), same size, same line. Case story chapters open plain, ink only, a step smaller.

**The Figure Labels Below Rule.** A figure is set first and its label sits beneath it (dt after dd visually), so the number is read before the words.

## Layout

Two centred measures with 20px side gutters (24px from 768px): **text** at 760px content for statements, lists and prose, and **wide** at 960px content for work tiles, fields' contents, the facts row and the case story grid. The header and sticky bars sit on the wide measure. Nothing is offset to one side.

Site pages open with a display statement 56px below the header (96px from 768px) over the glow, an optional note 40px beneath, then 80px of air (112px). On Work the In numbers field follows directly, then the Work chapter. Site chapters open with a hairline, 64px of air (96px), a two-tone headline, 48px (64px) to content, and close with 96px (128px). A chapter that directly follows a field drops its hairline.

Fields pad 80px top and bottom (112px from 768px). Their figure grids sit under a deep hairline 48px (64px) below the heading: Impact in two columns from 768px (three from 1024px when there are three or more figures), In numbers in two from 640px and four from 1024px. Cells are divided by vertical deep hairlines on desktop and horizontal ones when stacked.

A case page opens with its display title capped at 760px within the wide measure, then the facts row (Company, Role, Timeline, Focus: two columns, four from 768px, vertical hairlines between), then the cover. Each story chapter is a two-column grid from 768px (1fr title, 2fr content, 64px gap) under a hairline; the title sticks at 140px from the top while its content scrolls. Steps form a two-column card grid from 640px, the last card spanning both when the count is odd.

Work runs wide, pair, wide: one 16:9 tile (16:7 for a placeholder), then two 4:3 tiles with a 24px gap, the second dropped 96px; 56px between rows (80px from 768px). The Designs gallery lays screens out by their measured shape: wide images full width at 16:9, two or three phone screens side by side (4:5 or 3:4), four or more as a bento grid, 12px gaps (16px from 640px).

Ruled lists remain the default for structured facts: a hairline above, under every row, 12px padding (16px for two-line rows), label left, value right in tabular figures.

Navigation is pinned to the top: the 64px header on every page; below 768px a 44px page bar under it; on case pages a 44px section bar under it at every width. In-page jumps offset by the measured height of everything pinned, plus 24px.

**The Two Measures Rule.** Reading lives on 760px, work and evidence on 960px. Only fields break out, and only to full bleed.

## Elevation & Depth

The system is flat. Nothing casts a shadow, and nothing blurs or is translucent over content (the header and bars go from transparent to solid paper; they never frost). Depth comes from two things: the change of ground from white to deep, and hairlines. Inside a field, a soft violet glow hangs from the top edge and drifts down into place as the field arrives.

The one exception is the **page-opening glow**: three overlapping radial pools (violet, pink-lilac and periwinkle) blurred 24px, sitting behind each page's opening statement and under the transparent header. It is pinned by Mathew from a reference he chose, and is a deliberate, recorded exception to the usual ban on radial spotlight glows. As you scroll away from the top it swells to 1.45x, sinks 160px and fades to 15%.

**The Flat Ground Rule.** Depth is ground change and line. If something needs to stand apart, give it a tile fill, a hairline, or a whole field.

**The Pinned Glow Rule.** The lavender glow appears once per page, behind the opening, and nowhere else on white. It is a pinned exception, not a device to reuse on cards, buttons or sections.

## Shapes

Three radii. Tiles, step-card grids, the process loop frame and the gallery are 12px. The pill and skip link are 10px. Focus outlines are 4px with a 3px offset (2px violet stroke; on-deep white inside fields). A field's corners are 36px only while it is arriving or leaving, falling to 0 as it opens; the radius and a 7% side inset track scroll together and snap to 0 below 7% so an open field never shows a seam. The only circles are the 11px Path nodes. Lines are 1px hairlines. Icons are thin Lucide strokes (1.25 to 1.5), with monochrome brand marks for tools and social links.

## Components

### Buttons
- **Primary pill ("Say hello", header):** deep aubergine fill, white text, 10px corners, 40px tall, 16px side padding, 16px up-right arrow. Hover brightens to violet over 300ms; on the Say hello page it holds violet with aria-current. It is the only filled button.

### Arrow Link
Ink 16px text with a thin up-right arrow; on hover the text turns violet and the arrow travels 2px diagonally on the expo-out ease (300ms). On deep, the same link is on-deep white with a lilac hover.

### Next-Page Link
Closes Work, How I work and Path: a hairline on the text measure, 40px of air, "Next" (or "Back to the start") in 15px muted, then the next page's name at headline scale with a 28px arrow that turns violet and travels 6px over 500ms.

### Header and Bars
64px, sticky, wide measure: wordmark left; page links (16px, 28px apart, muted, ink when current, hidden below 768px) and the pill right. At the very top the header and bars are transparent with no edge, so the glow shows through; past 8px of scroll they turn solid paper with a hairline beneath (300ms colour fade). A 1px violet line along the header's bottom edge fills with page progress (spring, stiffness 220, damping 40).

### Section Bar (case pages)
44px, sticky under the header at every width: a muted left arrow and "All work" (label hidden below 640px), a 16px vertical hairline, then Impact (when present), the story sections with "The" dropped, Designs and Next, 15px and 20px apart. The section whose top has passed 40% of the viewport is ink with aria-current and a 1px violet underline that glides between links (spring, stiffness 420, damping 38). The list scrolls sideways on narrow screens with faded edges and keeps the current section in view.

### Bloom Field (signature)
A full-width deep aubergine region. As it enters (its top moving from the viewport bottom to 45% up) it opens from a panel inset 7% each side with 36px corners to full bleed with square corners. It stays open while being read and starts closing only once its bottom passes 35% from the top. The glow inside slides from -35% to rest and from 40% to full opacity as it enters. Contents sit on the wide or text measure, with a two-tone headline in on-deep white and dusk. Used for In numbers (Work), Impact and Designs (case pages) and the closing Say hello (every page but /hello). Reduced motion: shown open and still.

### Count-Up Figure
A figure that counts from 0 to its value once, 1.6s on the expo-out ease, when it is 8% inside the viewport, keeping its prefix, suffix, decimals and thousands grouping ("400K+", "142,000+"). Screen readers get the final value immediately; the animated digits are hidden from them. Reduced motion: final value from the start.

### Impact Field
On case pages with results: "Impact." headline, then figures at Impact scale, label beneath in 18px on-deep white, optional detail in lilac at 32ch, cells divided by deep hairlines.

### Facts Row
Four hairline-divided cells under a top hairline: 15px muted label, value in 16px ink beneath (Company carries its monochrome logo).

### Story Chapter and Step Cards
A hairline-topped two-column grid: plain title sticky on the left, prose on the right (first section as 18px ink lead, later ones 16px muted). Steps are paper cards in a grid whose 1px gaps show hairline through, the whole grid in a 12px rounded hairline frame. Each card: 24px padding (28px from 768px), a 2rem violet numeral, the step title in 18px 32px below, prose 8px under it.

### Work Figure and Tile
- **Figure:** tile, then name left and "logo Company · Year" right in muted, then a muted caption at 46ch, and when the project has both a cover and results, a line of violet values with muted labels. The whole figure is one link; on hover the name turns violet and the image scales to 1.02 over 700ms.
- **Tile:** 12px corners, tile fill on white or deep-tile inside fields, media cover-fitted (videos loop silently and hold their first frame under reduced motion).
- **Placeholder:** "Screens on the way" in 15px at the top; at the bottom, the project's real result figures in violet at tile-figure scale with muted labels, or, if it has none, the list of coming screens in muted. A placeholder always reads as a placeholder.

### Design Gallery
Screens on deep, laid out by measured shape, each block captioned in lilac with its labels joined by middle dots. Screens still to come follow as a lilac line and a deep-hairline ruled list.

### Process List (How I work)
Hairline-ruled stages with a 56px numeral column (15px violet), 18px title, muted line and an ink method list separated by soft middle dots. Consecutive looping stages share a 12px rounded hairline frame headed by a muted "repeats" line with a thin cycle icon.

### Path Timeline
One hairline down the left, an 11px node per role (ink ring, hollow; the current role filled violet), the year in soft at clamp 1.5rem to 1.75rem, "Role at Company" with "at" in muted, then dates and a muted paragraph.

### Copy Email and Footer
The address set large with a hairline underline that darkens on hover; a click copies it and shows a check and "Email copied" for two seconds, falling back to the mail app. Inside the closing field it is on-deep white with a deep-line underline. The footer line (copyright, email, LinkedIn, Behance, "Back to top") is 15px muted on white or lilac inside the field, under a hairline.

### Scrolling
Lenis smooth scrolling on the root (lerp 0.09, wheel smoothing) carries all in-page jumps. Under prefers-reduced-motion Lenis is not mounted and Motion follows the user setting.

## Do's and Don'ts

### Do:
- **Do** alternate white reading columns with deep fields, and put the numbers and the screens in the fields.
- **Do** open fields from the inset rounded panel to full bleed on scroll, keep them open while read, and show them open under reduced motion.
- **Do** set figures large, regular weight, tabular, label beneath, counting up once, with the final value for screen readers.
- **Do** use violet only for actions, progress, current state and achieved figures on white.
- **Do** keep the header and bars transparent at the very top and solid paper with a hairline once scrolled.
- **Do** close every page except /hello on the deep "Say hello" field.
- **Do** say plainly when screens are not ready, and let a placeholder carry the project's real figures.

### Don't:
- **Don't** add a second hue, a gradient fill, or tinted section backgrounds on white; the only colour regions are deep fields.
- **Don't** use soft or on-deep-soft for text under 24px.
- **Don't** add shadows, backdrop blur, glass or raised cards.
- **Don't** reuse the radial glow beyond the one pinned page-opening glow and the glow inside fields.
- **Don't** bold headings or figures.
- **Don't** fall back to a stat-card hero, a colourful theme or a hero, card grid, logo strip template.
