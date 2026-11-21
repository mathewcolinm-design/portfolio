// Loads the site's text and images from the content/ folder.
//
// You should not need to edit this file. To change what the site says,
// edit content/site.yml or a project's content/projects/<project>/index.md.
// See EDITING.md at the root of the repository.
//
// Every value is checked when the site loads. If something is missing or
// mistyped, the preview shows a message naming the file and the field.

import YAML from "yaml";
import siteSource from "../../../site/content/site.yml?raw";

// ---------- Helpers ----------

class ContentError extends Error {
  constructor(file: string, message: string) {
    super(`Problem in ${file}: ${message}. See EDITING.md for examples.`);
    this.name = "ContentError";
  }
}

type Raw = Record<string, unknown>;

function parseYaml(file: string, source: string): Raw {
  try {
    const value = YAML.parse(source);
    if (!value || typeof value !== "object") throw new Error("the file is empty");
    return value as Raw;
  } catch (e) {
    throw new ContentError(file, `the text couldn't be read (${(e as Error).message.split("\n")[0]})`);
  }
}

function text(file: string, obj: Raw, key: string, where = ""): string {
  const value = obj[key];
  if (value === undefined || value === null || String(value).trim() === "") {
    throw new ContentError(file, `"${key}"${where} is missing or empty`);
  }
  return String(value).trim();
}

function optionalText(obj: Raw, key: string): string | undefined {
  const value = obj[key];
  return value === undefined || value === null || String(value).trim() === "" ? undefined : String(value).trim();
}

function list(file: string, obj: Raw, key: string, { optional = false } = {}): unknown[] {
  const value = obj[key];
  if (value === undefined || value === null) {
    if (optional) return [];
    throw new ContentError(file, `the "${key}" list is missing`);
  }
  if (!Array.isArray(value)) throw new ContentError(file, `"${key}" should be a list (each item starts with "- ")`);
  return value;
}

function record(file: string, value: unknown, where: string): Raw {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new ContentError(file, `${where} should be a group of named fields`);
  }
  return value as Raw;
}

/** "Order flow" → "order-flow", used to match screen names to image files. */
const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-");

const fileName = (p: string) => p.split("/").pop()!.replace(/\.[^.]+$/, "");

// ---------- Logos ----------

// Company and tool logos live in content/logos/, named after the company or
// tool in lower case with dashes: "Tech Mahindra" → tech-mahindra.png.
const logoFiles = import.meta.glob<string>("../../../site/content/logos/*.{svg,png,webp,jpg,jpeg,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

export function logoFor(name: string): string | undefined {
  const key = slugify(name);
  return Object.entries(logoFiles).find(([p]) => slugify(fileName(p)) === key)?.[1];
}

// ---------- Site text ----------

const SITE = "content/site.yml";
const site = parseYaml(SITE, siteSource);
const intro = record(SITE, site.intro, '"intro"');
const pages = record(SITE, site.pages, '"pages"');

const pageText = (key: string) => {
  const p = record(SITE, pages[key], `"pages → ${key}"`);
  return { title: text(SITE, p, "bold", ` under pages → ${key}`), soft: ` ${text(SITE, p, "soft", ` under pages → ${key}`)}` };
};

export const profile = {
  name: text(SITE, site, "name"),
  email: text(SITE, site, "email"),
  linkedin: text(SITE, site, "linkedin"),
  behance: optionalText(site, "behance"),
  about: optionalText(site, "about"),
  availability: text(SITE, site, "availability"),
  /** Opening statement: the ink part, then the soft grey continuation. */
  statement: [text(SITE, intro, "bold", " under intro"), ` ${text(SITE, intro, "soft", " under intro")}`] as [string, string],
};

export const chapters = {
  work: pageText("work"),
  how: pageText("how"),
  path: pageText("path"),
  hello: pageText("hello"),
};

export const services = list(SITE, site, "what_i_do").map((item, i) => {
  const r = record(SITE, item, `item ${i + 1} in "what_i_do"`);
  return {
    name: text(SITE, r, "name", ` (what_i_do item ${i + 1})`),
    line: text(SITE, r, "line", ` (what_i_do item ${i + 1})`),
    icon: optionalText(r, "icon"),
  };
});

export const toolkit = list(SITE, site, "toolkit").map((item, i) => {
  const r = record(SITE, item, `item ${i + 1} in "toolkit"`);
  return { name: text(SITE, r, "name", ` (toolkit item ${i + 1})`), use: text(SITE, r, "use", ` (toolkit item ${i + 1})`) };
});

/** Career numbers shown large under the opening statement (optional "numbers:" in site.yml). */
export type Highlight = { value: string; label: string; project?: string };
export const highlights: Highlight[] = list(SITE, site, "numbers", { optional: true }).map((item, i) => {
  const r = record(SITE, item, `item ${i + 1} in "numbers"`);
  const where = ` (numbers item ${i + 1})`;
  return { value: text(SITE, r, "value", where), label: text(SITE, r, "label", where), project: optionalText(r, "project") };
});

export type Job = { role: string; company: string; dates: string; place?: string; text: string };

function toJob(listName: string) {
  return (item: unknown, i: number): Job => {
    const r = record(SITE, item, `item ${i + 1} in "${listName}"`);
    const where = ` (${listName} item ${i + 1})`;
    return {
      role: text(SITE, r, "role", where),
      company: text(SITE, r, "company", where),
      dates: text(SITE, r, "dates", where),
      place: optionalText(r, "place"),
      text: text(SITE, r, "summary", where),
    };
  };
}

/** Newest first, as written in site.yml. */
export const jobs: Job[] = list(SITE, site, "career").map(toJob("career"));

/** Shown separately from the career path. */
export const internships: Job[] = list(SITE, site, "internships", { optional: true }).map(toJob("internships"));

export type ProcessStage = { name: string; line: string; methods: string[]; loop: boolean };

export const processIntro = optionalText(site, "process_intro");

export const designProcess: ProcessStage[] = list(SITE, site, "process", { optional: true }).map((item, i) => {
  const r = record(SITE, item, `item ${i + 1} in "process"`);
  const where = ` (process item ${i + 1})`;
  return {
    name: text(SITE, r, "name", where),
    line: text(SITE, r, "line", where),
    methods: list(SITE, r, "methods", { optional: true }).map((m) => String(m).trim()),
    loop: r.loop === true,
  };
});

export const education = list(SITE, site, "education").map((item, i) => {
  const r = record(SITE, item, `item ${i + 1} in "education"`);
  const where = ` (education item ${i + 1})`;
  return { name: text(SITE, r, "name", where), place: text(SITE, r, "place", where), dates: text(SITE, r, "dates", where) };
});

export const skills = list(SITE, site, "skills").map((s) => String(s).trim());

// Other work: optional images live in content/other-work/.
const otherWorkImages = import.meta.glob<string>("../../../site/content/other-work/*.{webp,png,jpg,jpeg,avif,gif}", {
  eager: true,
  query: "?url",
  import: "default",
});

export type Experiment = { title: string; note: string; src?: string };

export const experiments: Experiment[] = list(SITE, site, "other_work", { optional: true }).map((item, i) => {
  const r = record(SITE, item, `item ${i + 1} in "other_work"`);
  const where = ` (other_work item ${i + 1})`;
  const image = optionalText(r, "image");
  let src: string | undefined;
  if (image) {
    src = Object.entries(otherWorkImages).find(([p]) => p.endsWith(`/${image}`))?.[1];
    if (!src) throw new ContentError(SITE, `the image "${image}"${where} isn't in content/other-work/`);
  }
  return { title: text(SITE, r, "title", where), note: text(SITE, r, "note", where), src };
});

// ---------- Projects ----------

export type Metric = { value: string; label: string; detail?: string };
export type Shot = { label: string; src?: string };

/** A paragraph or a bulleted list inside a story section. */
export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };
/** One "## Heading" section of a project's story. "### Steps" inside it become numbered steps. */
export type StorySection = { id: string; title: string; blocks: Block[]; steps: { title: string; blocks: Block[] }[] };

export type Project = {
  slug: string;
  name: string;
  company: string;
  year: string;
  /** One line under the tile; also the case study's grey headline. */
  caption: string;
  role: string;
  timeline: string;
  focus: string;
  story: StorySection[];
  metrics?: Metric[];
  shots: Shot[];
  cover?: string;
};

const projectSources = import.meta.glob<string>("../../../site/content/projects/*/index.md", {
  eager: true,
  query: "?raw",
  import: "default",
});
const projectImages = import.meta.glob<string>("../../../site/content/projects/*/**/*.{webp,png,jpg,jpeg,avif,gif,mp4,webm}", {
  eager: true,
  query: "?url",
  import: "default",
});

/** Paragraphs are separated by blank lines; lines starting with "- " form a list. */
function toBlocks(source: string): Block[] {
  return source
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk): Block => {
      const lines = chunk.split("\n").map((l) => l.trim());
      if (lines.every((l) => l.startsWith("- "))) return { type: "ul", items: lines.map((l) => l.slice(2).trim()) };
      return { type: "p", text: lines.join(" ") };
    });
}

/** Splits the story into "## " sections, and each section's "### " parts into steps. */
function toStory(file: string, body: string): StorySection[] {
  const clean = body.replace(/<!--[\s\S]*?-->/g, "").trim();
  if (!clean) throw new ContentError(file, "the story below the closing --- line is empty");
  const parts = clean.split(/^## +/m);
  const sections: StorySection[] = [];
  // Text before the first "## " heading becomes an untitled opening section.
  if (parts[0].trim()) sections.push({ id: "story", title: "The story", blocks: toBlocks(parts[0]), steps: [] });
  for (const part of parts.slice(1)) {
    const [heading, ...rest] = part.split("\n");
    const title = heading.trim();
    const [lead, ...stepParts] = rest.join("\n").split(/^### +/m);
    sections.push({
      id: slugify(title) || `section-${sections.length + 1}`,
      title,
      blocks: toBlocks(lead),
      steps: stepParts.map((step) => {
        const [stepTitle, ...stepBody] = step.split("\n");
        return { title: stepTitle.trim(), blocks: toBlocks(stepBody.join("\n")) };
      }),
    });
  }
  return sections;
}

function loadProject(path: string, source: string): Project & { order: number } {
  const slug = path.split("/").at(-2)!;
  const file = `content/projects/${slug}/index.md`;
  const match = source.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new ContentError(file, "the details must sit between two --- lines at the top");
  const meta = parseYaml(file, match[1]);
  const story = toStory(file, match[2]);

  const images = Object.entries(projectImages).filter(([p]) => p.includes(`/projects/${slug}/`));
  const cover = images.find(([p]) => /\/cover\.[^/]+$/.test(p))?.[1];
  const screenFiles = images.filter(([p]) => p.includes(`/projects/${slug}/screens/`));

  // Screens listed in index.md, matched to files by name; extra files are added after them.
  const listed = list(file, meta, "screens", { optional: true }).map((s) => String(s).trim());
  const used = new Set<string>();
  const shots: Shot[] = listed.map((label) => {
    const hit = screenFiles.find(([p]) => slugify(fileName(p)).replace(/^\d+-/, "") === slugify(label));
    if (hit) used.add(hit[0]);
    return { label, src: hit?.[1] };
  });
  for (const [p, src] of screenFiles.sort(([a], [b]) => a.localeCompare(b))) {
    if (used.has(p)) continue;
    const label = fileName(p).replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ");
    shots.push({ label: label.charAt(0).toUpperCase() + label.slice(1), src });
  }

  const results = list(file, meta, "results", { optional: true }).map((item, i) => {
    const r = record(file, item, `item ${i + 1} in "results"`);
    const where = ` (results item ${i + 1})`;
    return { value: text(file, r, "value", where), label: text(file, r, "label", where), detail: optionalText(r, "detail") };
  });

  const order = Number(meta.order);
  if (!Number.isFinite(order)) throw new ContentError(file, `"order" should be a number, like 1`);

  return {
    slug,
    order,
    name: text(file, meta, "name"),
    company: text(file, meta, "company"),
    year: text(file, meta, "year"),
    caption: text(file, meta, "caption"),
    role: text(file, meta, "role"),
    timeline: text(file, meta, "timeline"),
    focus: text(file, meta, "focus"),
    story,
    metrics: results.length ? results : undefined,
    shots,
    cover,
  };
}

export const projects: Project[] = Object.entries(projectSources)
  .map(([path, source]) => loadProject(path, source))
  .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name))
  .map(({ order: _order, ...p }) => p);
