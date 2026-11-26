// Renders every board in boards/ to export/<name>.png (and .webp when cwebp is installed).
// Usage: npm install, then `npm run render` (all) or `node render.mjs 03-construction` (one).
import puppeteer from "puppeteer-core";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.dirname(new URL(import.meta.url).pathname);
const only = process.argv.slice(2);
const boards = fs.readdirSync(path.join(root, "boards"))
  .filter((f) => f.endsWith(".html") && (only.length === 0 || only.some((o) => f.startsWith(o))))
  .sort();

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--allow-file-access-from-files"],
});
const page = await browser.newPage();
for (const file of boards) {
  const html = fs.readFileSync(path.join(root, "boards", file), "utf8");
  const portrait = /class="portrait/.test(html);
  await page.setViewport(portrait ? { width: 1600, height: 2000 } : { width: 2400, height: 1600 });
  await page.goto("file://" + path.join(root, "boards", file), { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 300));
  const out = path.join(root, "export", file.replace(".html", ".png"));
  await page.screenshot({ path: out });
  try {
    execFileSync("cwebp", ["-quiet", "-q", "90", out, "-o", out.replace(".png", ".webp")]);
  } catch {}
  console.log("rendered", path.basename(out));
}
await browser.close();
