const puppteer = require("puppeteer");

async function run() {
  const browser = await puppteer.launch(),
    page = await browser.newPage();

  await page.goto("http://localhost/ec");

  //   await page.screenshot({ path: "ec.png", fullPage: true });
  await page.pdf({ path: "ec.pdf", format: "A4" });

  await browser.close();
}

run();
