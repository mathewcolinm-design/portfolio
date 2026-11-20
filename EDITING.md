# Editing your portfolio

All of the site's words and images live in one folder: **`site/content/`**. You never need to touch the code in `site/src/` to change what the site says.

| What you want to change | File |
|---|---|
| Your name, email, LinkedIn, the opening statement, page headings, What I do, Toolkit, career, education, skills, other work | `site/content/site.yml` |
| A project's details, results and story | `site/content/projects/<project>/index.md` |
| A project's cover image | `site/content/projects/<project>/cover.webp` |
| A project's screenshots | `site/content/projects/<project>/screens/` |
| Images for "Other work" | `site/content/other-work/` |

Project folders (newest first): `certinal-brand`, `demo-films`, `fxdx`, `avitus-motion`, `avitus`, `pricepal`. Hidden projects live in `site/content/archive/` (currently Tetra and AlphaX). Move a folder back into `projects/` to show it again.

---

## 1. See your changes as you edit

In the VS Code terminal (Terminal → New Terminal):

```
cd ~/Documents/Mine/Claude/site
npm run dev
```

Open **http://localhost:5173**. Leave it running. Every time you save a file in `site/content/`, the page updates by itself.

To stop it, click in the terminal and press **Ctrl + C**.

---

## 2. Change text

Open `site/content/site.yml`, change the words after a colon, and save. For example, the opening statement:

```yaml
intro:
  bold: Mathew Colin designs complex products so they feel clear.
  soft: A product designer for SaaS, fintech and Web3, with brand and motion in the toolkit.
```

`bold` is the black part and `soft` is the grey part that follows it. Page headings work the same way, under `pages:`.

### Three rules for these files

1. **Keep the indents.** Lines inside a group start with two spaces. Don't use tabs.
2. **Lists start with `- `** (a dash and a space). To add an item, copy an existing one, including its indent.
3. **If your text contains a colon followed by a space**, wrap the whole text in double quotes:
   ```yaml
   - "Designed the full experience: games, rewards and leaderboards."
   ```

Lines starting with `#` are notes to you. The site ignores them.

---

## 3. Edit a project

Open `site/content/projects/<project>/index.md`. It has two parts.

### The details (between the two `---` lines)

```yaml
---
name: Tetra
order: 1                 # position on the Work page (1 = first)
company: Asva Labs
year: "2025"
caption: Designing one exchange for crypto, forex, stocks and commodities
role: UI/UX designer
timeline: Aug 2025 – Jan 2026
focus: Trading platform

results:                 # optional; shown inside "The outcome"
  - value: "142,000+"
    label: Waitlist signups
    detail: For the beta

screens:
  - Trading screen
  - Order flow
---
```

**Reorder projects** by changing the `order` numbers. Keep the newest project as `1`.

### The story (everything below the second `---`)

The case study page is told as a story. Each line starting with `## ` starts a new section, and each line starting with `### ` inside a section becomes a numbered step:

```markdown
## The context

Who the product is for, what it does, and where you came in.

## The challenge

What made it hard. What was at stake for users or the business.

## How I approached it

### Mapping the flows
What you did first, and why.

### Testing the hard parts
What you tested, what you found, what you changed because of it.

## The outcome

What changed. The numbers from `results:` appear here automatically.

## What I learned

One or two honest sentences.
```

- **Paragraphs:** leave a blank line between them.
- **Bullet lists:** start lines with `- `.
- **Bold, italic and links:** `**bold**`, `*italic*` and `[link text](https://example.com)`.
- **Section names:** call sections whatever you like. They appear in the bar under the header automatically. A section with "outcome", "result" or "impact" in its name gets the `results` numbers.
- **Notes to yourself:** anything between `<!--` and `-->` is hidden on the site. Each project starts with a note marking the story as a draft.

**The drafts only contain facts from your résumé.** The stories get much stronger when you add what only you know: what you noticed, the options you weighed, what you decided and why, what users said, and what changed afterwards.

---

## 4. Add images

Use **.webp**, .png or .jpg files, about **2000px wide**.

### Cover (the tile on the Work page and the top of the case study)

Name it `cover.webp` and put it in the project's folder:

```
site/content/projects/tetra/cover.webp
```

On the Work page, the 1st and 4th projects show **wide** tiles (16:9) and the others show **tall** tiles (4:5). The cover is cropped to fill its tile, so frame each cover for its slot.

### Screens (the Designs section of a case study)

Put them in the project's `screens/` folder. **Videos work too**: an `.mp4` plays silently on a loop (and stays still for visitors who prefer less motion). **Name each file after its entry in the `screens:` list**: lower case, with dashes instead of spaces.

| In `screens:` | File name |
|---|---|
| Trading screen | `screens/trading-screen.webp` |
| Order flow | `screens/order-flow.webp` |
| Cross-chain flow | `screens/cross-chain-flow.webp` |

You can also put a number first to fix the order: `01-trading-screen.webp`. Screens without an image are listed as "Screens on the way".

**The layout is automatic.** The site measures each screen. Tall phone screens are gathered together: four or more form a bento grid, two or three sit side by side, and a single one pairs with a wide image. Wide images and videos run full width. Every image fills its tile, so keep the important part of a phone mockup away from the edges. Images in the folder that aren't in the list still show up after the listed ones, labelled from their file name.

### Other work

Put the image in `site/content/other-work/`, then add an `image:` line to the item in `site.yml`:

```yaml
other_work:
  - title: Avitus campaign motion
    note: Motion and social pieces for Avitus
    image: avitus-motion.webp
```

---

### Logos and icons

- **Company logos:** put the file in `site/content/logos/`, named after the company in lower case with dashes: `tech-mahindra.png`, `asva-labs.svg`, `matqcode.png`. It appears automatically on the Path page, on work tiles and in case studies, inside a small white frame. Square images around 128px or SVGs look best.
- **Tool icons:** Figma, Framer, Claude, ElevenLabs, Lottie, Maze and Notion have built-in icons. For any other tool, add a file named after it to `site/content/logos/`, for example `after-effects.svg`.
- **"What I do" icons:** set `icon:` on an item in `site.yml`. The available names are listed in a comment above `what_i_do:`.

Logos are included for Certinal, Tech Mahindra and Swftconnect. Asva Labs, MATQCODE and Jaya Television don't have one yet: add those files when you have them.

---

## 5. Add, hide or remove a project

To hide a project, move its folder to `site/content/archive/`.

- **Add:** copy a whole project folder (for example `tetra`), rename the copy (lower case, dashes, such as `new-project`), then edit its `index.md` and swap the images. The folder name becomes the web address: `/work/new-project`.
- **Remove:** delete the project's folder.
- **Hide for now:** move the folder out of `site/content/projects/`, for example to your desktop.

---

## 6. Your links, about text, jobs, courses and skills

- `linkedin:` and `behance:` in `site.yml` set the links on Say hello and in the footer. Delete the `behance:` line to hide it.
- `about:` is the paragraph at the top of the Path page.

### Jobs, internships, courses and skills

In `site.yml`, copy an existing entry under `career:`, `internships:`, `education:` or `skills:` and edit it. Internships are listed separately from the career timeline. Career entries go **newest first**. The Path page shows them oldest to newest, and the first entry is marked as your current role.


### Your design process

The **Design process** section on the How I work page comes from `process_intro:` and `process:` in `site.yml`. Each stage has a `name`, a `line` and a list of `methods`. Stages with `loop: true` that sit next to each other are drawn inside one frame marked as repeating. Add, remove or reorder stages freely.

---

## 7. Publish your changes

Your edits are only on your Mac until you push them to GitHub. In VS Code:

1. Open **Source Control** in the left sidebar (the branch icon).
2. Type a short message, such as `Update Tetra screenshots`.
3. Click **Commit**, then **Sync Changes** (or **Push**).

Or in the terminal:

```
cd ~/Documents/Mine/Claude
git add -A
git commit -m "Update Tetra screenshots"
git push
```

When you work with Claude in this folder, changes are pushed automatically at the end of each reply.

---

## 8. If something goes wrong

If a file has a mistake, the page shows a box like this:

> **The site couldn't load its content**
> Problem in content/site.yml: "email" is missing or empty.

It names the file and the field. The usual causes:

- **A missing or changed indent:** line it up with the lines around it.
- **A colon in the text:** wrap the text in double quotes.
- **A deleted field that's required:** add it back. The comments in each file show what belongs there.

Still stuck? Undo your last change with **Cmd + Z** and save, or ask Claude to fix it.
