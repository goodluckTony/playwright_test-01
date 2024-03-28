// @ts-check

const { test, expect } = require("@playwright/test");

test("Find broken images test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");
  await page.route("**/*", (route) => {
    route.continue().catch(() => {});
  })
  const brokenImages = await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll("img"));
    const brokenImagesList = [];
    for (const image of images) {
      const response = await fetch(image.src, {method: "HEAD"}).catch(() => null);
      if (!response || response.status !== 200) {
        brokenImagesList.push(image.src);
      }
    };
    return brokenImagesList;
  });
  console.log(`Total broken images: ${brokenImages.length}`);
  console.log("Broken images Names: ");
  for (const src of brokenImages) {
    console.log(src);
  };

  // await page.waitForTimeout(10000);
});

