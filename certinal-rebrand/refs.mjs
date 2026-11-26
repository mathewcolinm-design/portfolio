import puppeteer from "puppeteer-core"; import path from "node:path";
const root = path.dirname(new URL(import.meta.url).pathname);
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args:["--allow-file-access-from-files"] });
const p = await b.newPage();
const jobs = [
  ["logo-colour", 2400, 600, `<body style="margin:0;background:#fff;display:grid;place-items:center;width:2400px;height:600px"><img src="../certinal-logo-colour.svg" style="width:2100px"></body>`],
  ["logo-white-on-black", 2400, 600, `<body style="margin:0;background:#111;display:grid;place-items:center;width:2400px;height:600px"><img src="../certinal-logo-colour.svg" style="width:2100px;filter:brightness(0) invert(1)"></body>`],
  ["icon-colour", 1200, 1200, `<body style="margin:0;background:#fff;display:grid;place-items:center;width:1200px;height:1200px"><img src="../certinal-icon-colour.svg" style="width:900px"></body>`],
  ["rings-pattern", 1600, 1200, `<body style="margin:0;width:1600px;height:1200px;background:radial-gradient(circle at 100% 0%,#CDF757 0 12%,#A4EA5B 12% 24%,#7BDC60 24% 36%,#53CF64 36% 49%,#2AC169 49% 64%,#01B46D 64%)"></body>`],
];
for (const [n,w,h,html] of jobs) { await p.setViewport({width:w,height:h}); const f=path.join(root,"assets/refs/_"+n+".html"); (await import("node:fs")).writeFileSync(f, html); await p.goto("file://"+f,{waitUntil:"networkidle0"}); await p.screenshot({path:`assets/refs/${n}.png`}); }
await b.close(); console.log("ok");
