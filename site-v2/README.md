# Mathew Colin, portfolio: version 2

A second design of the same portfolio. It reads **the same words and images** as the first site, from `../site/content/`, so one edit there updates both versions. Only the design differs.

React + Vite + Tailwind CSS + Motion + Lenis. Font: Geist (self-hosted). Icons: Lucide.

**Look:** the white, hairline "Quiet Column" of version 1, tinted violet. A soft lavender glow sits behind each page opening and fades as you scroll. The work and its numbers live in deep violet fields that open from a rounded panel to the full width of the page as they scroll into view. Figures count up once when they arrive. Case studies are data-forward: a facts row, an Impact field of large figures, the story with numbered approach cards, then the designs on deep violet.

## Run it

```
cd site-v2
npm install      # first time only
npm run dev      # local preview at http://localhost:5174 (version 1 uses 5173)
npm run build    # production build into site-v2/dist
```

## Where things are

| Route | File | What's on it |
|---|---|---|
| `/` | `src/pages/Work.tsx` | Opening statement, the numbers field, projects, other work |
| `/how` | `src/pages/How.tsx` | What I do, design process, toolkit |
| `/path` | `src/pages/Path.tsx` | Career timeline, internship, education, skills |
| `/hello` | `src/pages/Hello.tsx` | Email, LinkedIn, Behance |
| `/work/<slug>` | `src/pages/Case.tsx` | Facts, cover, Impact field, story chapters, Designs field, next project |

- **Glow, violet fields, count-up:** `src/components/bloom.tsx` (`Glow`, `Bloom`, `CountUp`). All three switch to their still, final state for visitors who ask for reduced motion.
- **Colours:** tokens at the top of `src/index.css` (`--violet`, `--deep`, `--on-deep`, and others).
- **Footer:** every page except Say hello ends on a deep violet "Say hello" field (`src/components/Footer.tsx`).
- **Content loader:** `src/data/content.ts`, pointed at `../site/content`. `vite.config.ts` allows the dev server to read that folder.

## Content only version 2 uses

- `numbers:` in `site/content/site.yml`: the four large figures under the opening statement. Each has a `value`, a `label` and an optional `project` (a project's folder name, which adds a link). Version 1 ignores this list.
- Project `results:` already exist in each project's `index.md`. Version 2 shows them as the Impact field, and as violet figures under the project on the Work page. A project without `results:` simply skips the Impact field.
