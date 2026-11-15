// Renders the console in headless Chromium and saves the README preview image.
//   node scripts/capture-preview.mjs          (in CI, after `npx playwright install chromium`)
//   CHROME_PATH=/path/to/chrome node scripts/capture-preview.mjs   (local)

import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 1.5 });
await page.emulateMedia({ reducedMotion: 'no-preference' });
await page.goto(pathToFileURL(resolve('index.html')).href);
await page.click('#start');
await page.waitForTimeout(1800);

const beacon = await page.$('.marker[data-id="examly"] .beacon');
const box = await beacon.boundingBox();
await page.mouse.move(box.x + 30, box.y + 40);
await page.waitForTimeout(400);

await (await page.$('.console')).screenshot({ path: 'assets/console-preview.png' });
await browser.close();
console.log('Saved assets/console-preview.png');
