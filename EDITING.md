# Editing your portfolio

All of the site's words and images live in one folder: **`site/content/`**. You never need to touch the code in `site/src/` to change what the site says.

| What you want to change | File |
|---|---|
| Your name, email, LinkedIn, the opening statement, page headings, What I do, Toolkit, career, education, skills, other work | `site/content/site.yml` |
| A project's details, results and overview | `site/content/projects/<project>/index.md` |
| A project's cover image | `site/content/projects/<project>/cover.webp` |
| A project's screenshots | `site/content/projects/<project>/screens/` |
| Images for "Other work" | `site/content/other-work/` |

Project folders: `tetra`, `fxdx`, `avitus`, `certinal-brand`, `demo-films`, `alphax`.

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

Open `site/content/projects/<project>/index.md`. The top part, between the two `---` lines, holds the details:

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

what_i_did:
  - Designed user flows, wireframes and high-fidelity prototypes.
  - Built and maintained a Figma design system.

results:                 # optional; delete the whole block if you have none
  - value: "142,000+"
    label: Waitlist signups
    detail: For the beta

screens:
  - Trading screen
  - Order flow
---
Tetra lets traders work across crypto, forex, stocks and commodities...
```

Everything **below** the second `---` is the **Overview** paragraph. Leave a blank line between paragraphs.

**Reorder projects** by changing the `order` numbers.

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

Put them in the project's `screens/` folder and **name each file after its entry in the `screens:` list**: lower case, with dashes instead of spaces.

| In `screens:` | File name |
|---|---|
| Trading screen | `screens/trading-screen.webp` |
| Order flow | `screens/order-flow.webp` |
| Cross-chain flow | `screens/cross-chain-flow.webp` |

You can also put a number first to fix the order: `01-trading-screen.webp`. Screens without an image are listed as "Screens on the way". Images in the folder that aren't in the list still show up after the listed ones, labelled from their file name.

### Other work

Put the image in `site/content/other-work/`, then add an `image:` line to the item in `site.yml`:

```yaml
other_work:
  - title: Avitus campaign motion
    note: Motion and social pieces for Avitus
    image: avitus-motion.webp
```

---

## 5. Add, hide or remove a project

- **Add:** copy a whole project folder (for example `tetra`), rename the copy (lower case, dashes, such as `new-project`), then edit its `index.md` and swap the images. The folder name becomes the web address: `/work/new-project`.
- **Remove:** delete the project's folder.
- **Hide for now:** move the folder out of `site/content/projects/`, for example to your desktop.

---

## 6. Add a job, course or skill

In `site.yml`, copy an existing entry under `career:`, `education:` or `skills:` and edit it. Career entries go **newest first**. The Path page shows them oldest to newest, and the first entry is marked as your current role.

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
