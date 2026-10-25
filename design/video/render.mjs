import { chromium } from "/home/claude/qa/node_modules/playwright/index.mjs";
const [phrase, out, fps = "30", only] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
await p.goto(`file:///home/claude/vid/scene.html?t=${encodeURIComponent(phrase)}`);
await p.waitForTimeout(800);
const T = await p.evaluate(() => window.LOOP);
const n = Math.round(T * +fps);
const frames = only ? only.split(",").map(Number) : [...Array(n).keys()];
for (const i of frames) {
  await p.evaluate((t) => window.renderAt(t), i / +fps);
  await p.screenshot({ path: `${out}/${String(i).padStart(4, "0")}.png` });
}
console.log("frames", frames.length);
await b.close();
