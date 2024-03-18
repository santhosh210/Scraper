const puppeteer = require("puppeteer");

async function run(params) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://traversymedia.com/");

  const courses = await page.evaluate(() =>
    Array.from(document.querySelectorAll("card"), (e) => e.innerHTML)
  );

  console.log(courses);

  await browser.close();
}

run();
