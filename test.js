// khởi tạo dự án playwright
const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com");
  await page.screenshot({ path: "example.png" });
  await browser.close();
})();
// chạy file test.js
// node test.js
