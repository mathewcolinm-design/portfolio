---
name: Mathew Colin Portfolio
description: A calm, light, tabbed product-design portfolio where framed work carries every page. Light mode only.
colors:
  paper: "#f8f9fa"
  paper-surface: "#eef0f2"
  paper-raised: "#ffffff"
  navy-ink: "#0a1628"
  slate-muted: "#565e68"
  ink-line: "rgb(10 22 40 / 0.1)"
  focus-violet: "#4a2fd6"
  positive-green: "#0f7a3d"
  mat-caption: "#3a4250"
typography:
  display:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 2.85rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.625
  body-small:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  metric:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 600
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
rounded:
  tile-sm: "10px"
  chip: "12px"
  button: "14px"
  row: "18px"
  card: "20px"
  frame-lg: "24px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  grid-gap: "24px"
  card-pad: "24px"
  section: "96px"
  column: "1152px"
  column-narrow: "948px"
components:
  button-primary:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 16px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 16px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-raised}"
  nav-tab:
    textColor: "{colors.slate-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  nav-tab-active:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
  skill-chip:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "10px 16px"
  metric-card:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.positive-green}"
    typography: "{typography.metric}"
    rounded: "{rounded.card}"
    padding: "24px"
  info-panel:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.card}"
    padding: "0 24px"
---

# Design System: Mathew Colin Portfolio

## Overview

**Creative North Star: "The Framed Gallery"**

A quiet, cool-white gallery where every piece of work hangs on a soft pastel mat. The page is the wall, not the exhibit: chrome is small, type is modest, and colour belongs to the mats. The site is light mode only; sections are separated by 1px dividers and vertical rest, never by a change of ground colour.

Density is low and calm. One 1152px column, two-up framed cards with long captions underneath, generous vertical rest between sections. Navigation lives in a single floating frosted pill at the top centre with a white pill that glides between tabs. The only saturated light on the page is the violet-periwinkle-pink light leak behind the header, behind the header.

**Key Characteristics:**
- Cool near-white ground, deep navy ink, slate greys. Light mode only.
- Work sits on pastel gradient mats with large soft radii (20 to 24px).
- Manrope throughout at modest sizes, medium weight for headings, tight negative tracking.
- Frosted pill navigation with a spring-gliding active pill.
- Thin 1px dividers between major sections, as in the reference.

## Colors

A single light palette with six roles, plus four pastel mats.

### Primary
- **Navy Ink** (paper theme `navy-ink`): text, primary button fill, monogram base.

### Tertiary
- **Focus Violet** (`focus-violet`): reserved for focus rings, text selection (28% mix), caret and native form accents. It appears nowhere as decoration.
- **Positive Green** (`positive-green`): metric values on case-study result cards, and nothing else.

### Neutral
- **Paper** (`paper`): page background.
- **Paper Surface** (`paper-surface`): secondary buttons, chips, tool rows, info panels, metric cards, the nav track (at 82% with backdrop blur).
- **Paper Raised** (`paper-raised`): the active nav pill, secondary-button hover, job-initial tiles.
- **Slate Muted** (`slate-muted`): body copy, captions, metadata, inactive tabs, the soft half of split headings.
- **Ink Line** (`ink-line`): 1px borders, dividers, dashed list rules.
- **Mat Caption** (`mat-caption`): fixed dark slate for text set on a pastel mat.

### Pastel Mats
Four layered gradients (two radial blooms over a linear base), chosen per project so the grid has rhythm: **sky** (blue to lilac with a pink bloom), **peach** (apricot and rose over peach-to-periwinkle), **lilac** (lavender with coral and periwinkle blooms), **mint** (sea-glass with a periwinkle bloom). Exact stops live in the sidecar.

### Named Rules
**The Mats Hold the Colour Rule.** Saturated colour lives in the mats and the header light leak only. UI chrome stays navy, slate and paper.

**The Light Only Rule.** The site has one theme. Components read colour roles, never hard values, and no section changes the page ground; emphasis comes from the mats, type and dividers.

**The Violet Means Focus Rule.** The violet accent marks keyboard focus and selection. It is not a link colour, highlight, or brand stripe.

## Typography

**Display Font:** Manrope Variable (with ui-sans-serif, system-ui)
**Body Font:** Manrope Variable
**Label/Mono Font:** none distinct; figures use tabular numerals

**Character:** One geometric-humanist sans at modest sizes. Headings are medium (500), never bold, with tight tracking; hierarchy comes from size and the slate/ink contrast rather than weight.

### Hierarchy
- **Display** (500, clamp 36 to 45.6px, 1.05, -0.025em): the name on tab pages; case-study titles use the same treatment at clamp 32 to 44px, 1.1.
- **Headline** (500, 28px mobile / 32px desktop, tight, -0.02em): case-study section heads, About headings. Often two lines, the second in Slate Muted.
- **Title** (500, 22px, -0.015em): split headings ("Experience *since 2020*", "Tools *powering my work*") and "Next project".
- **Body** (400, 18px, relaxed 1.625): intros, overviews, process lists, bios, capped at 60 to 62ch.
- **Body Small** (400 to 500, 16 to 17px): card captions, job descriptions, footer links, metadata.
- **Label** (600, 15px): nav tabs, buttons, chips, footer column heads.
- **Metric** (600, 34px, -0.02em, tabular): result values only.

### Named Rules
**The Two-Tone Heading Rule.** Section headings pair an ink phrase with a muted continuation in the same size and weight ("Tools" / "powering my work"). Contrast does the work that a label above the heading would otherwise do.

**The Medium Not Bold Rule.** Headings sit at weight 500. 600 is for labels and metrics; 700 only inside the monogram and initial tiles.

## Layout

A single centred column of 1152px (narrow variant 948px for case studies), with 20px side gutters on mobile and 32px from md up. The work grid is two columns from md with a 24px column gap and 48 to 56px row gap; experiments use a 2 to 3 column masonry. About uses an asymmetric 0.85fr / 1.15fr split with a sticky facts panel. Sections breathe on roughly 96px vertical rest (`py-24`, up to 112px). The header sits below a fixed nav (pt 96px on mobile so the floating pill never overlaps the monogram). Captions sit under frames, metadata right-aligned on desktop and stacked below on phones. Breakpoints follow Tailwind defaults (sm 640, md 768, lg 1024).

## Elevation & Depth

Mostly flat with tonal layering (surface over paper, raised over surface). Shadows are soft, navy-tinted and negatively spread, used only on things that float or that you press: the nav track, the active nav pill, the primary button, the monogram and tool-icon tiles. Cards and mats carry no shadow; they separate by colour and a 1px line.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 8px 24px -12px rgb(10 22 40 / 0.3)`): the frosted nav track.
- **Pill** (`box-shadow: 0 2px 8px -2px rgb(10 22 40 / 0.2)`): the active tab pill.
- **Press** (`box-shadow: 0 4px 12px -4px rgb(10 22 40 / 0.35)`, hover `0 8px 18px -6px rgb(10 22 40 / 0.4)`): primary button.
- **Tile** (`box-shadow: 0 2px 6px -2px rgb(10 22 40 / 0.25)`): white tool-icon tiles.

### Named Rules
**The Frames Sit Flat Rule.** Work mats never cast shadows. Depth on a frame comes from a slow 1.025 scale on hover inside its clipping radius.

## Shapes

Soft, generous, rounded rectangles. Radius scales with size: 10px initial tiles, 12px chips, 14px buttons, 18px tool rows, 20px cards and project mats, 24px case-study hero frames. Navigation is fully pill-shaped. Square tiles (monogram, tool icons) use a radius of 0.27 to 0.3 times their size, an app-icon squircle feel. Borders are 1px Ink Line; list separators inside reading flows are dashed.

## Components

### Buttons
Quiet, confident, slightly lifted.
- **Shape:** gently rounded rectangle (14px), 44px tall, 16px side padding, 15px semibold label.
- **Primary:** Navy Ink fill with Paper text and the Press shadow. Inverts automatically in navy sections.
- **Secondary:** Paper Surface fill, 1px line, ink text; hover moves to Paper Raised.
- **Hover / Focus:** both lift 1px over 300ms ease-out-expo and settle on press; focus is the global 2px violet outline at 3px offset.

### Chips
- **Style:** Paper Surface, 1px line, 12px radius, 10px by 16px padding, 15px medium label. Static (skills list), not interactive.

### Cards / Containers
- **Project card:** a 20px-radius pastel mat at 564:423 with the caption (muted, ink on hover) and "Company · Year" below. The whole card is the link; the mat scales to 1.025 over 700ms on hover.
- **Metric card:** Paper Surface, 1px line, 20px radius, 24px padding; Positive green tabular value, ink label, muted detail.
- **Info panel / tool row:** Paper Surface, 1px line, 18 to 20px radius, divided internally by lines.

### Navigation
- **Tab bar:** fixed top centre (16px from top on mobile, 32px desktop). Frosted pill track (Paper Surface at 82%, backdrop blur, 1px line, Float shadow, 4px inset). Tabs are 15px semibold, muted until active; the active tab sits on a Paper Raised pill that glides between tabs on a spring (stiffness 420, damping 36).
- **Case-study variant:** same track with a back link ("Projects", icon-only on phones), a 1px divider, and section tabs that track scroll position; horizontally scrollable on narrow screens.

### Pastel Mat Frame (signature)
The frame every piece of work sits in. A clipped rounded rectangle at a declared aspect ratio, filled with one of the four mats, image covering it. Until real screens arrive, it shows a plainly worded placeholder in Navy Ink and Mat Caption.

### Monogram
The MC tile used instead of a portrait: navy diagonal gradient with a violet bloom in the top-right corner, white bold initials at 0.36 of the size, radius 0.3 of the size, and a soft drop plus inner highlight.

## Do's and Don'ts

### Do:
- **Do** put every piece of work on a pastel mat at 20px radius (24px for a case-study hero).
- **Do** separate major sections with a 1px Ink Line divider and vertical rest; read colour roles, never hard values.
- **Do** keep headings at weight 500 with negative tracking, and use the two-tone ink/muted pairing for section titles.
- **Do** keep reading text at 18px with relaxed leading and a 60 to 62ch measure, in Slate Muted.
- **Do** use the frosted pill track with the gliding active pill for any tabbed navigation.
- **Do** keep violet for focus, selection and caret only.

### Don't:
- **Don't** add a photo of Mathew or a portrait tile; the monogram stands in.
- **Don't** put shadows on mats or content cards; shadows are for floating and pressable elements only.
- **Don't** introduce bold display weights or a second typeface.
- **Don't** use saturated colour in UI chrome; colour belongs to the mats and the header light leak.
- **Don't** add dark sections or a dark theme; the site is light mode only.
