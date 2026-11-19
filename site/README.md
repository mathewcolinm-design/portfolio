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

All words and images live in `content/`, not in the code:

- `content/site.yml`: name, contact, opening statement, page headings, What I do, toolkit, career, education, skills, other work.
- `content/projects/<project>/index.md`: one file per project (details at the top, Overview below).
- `content/projects/<project>/cover.webp` and `screens/`: images, picked up automatically by file name.

Step-by-step instructions are in [EDITING.md](../EDITING.md). Content is checked when the site loads; a mistake shows a message naming the file and field instead of a blank page.
