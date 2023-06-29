import { test } from "@playwright/test";
import { Sesh } from "../pom/sesh.pom";
import { BASE_URL, BITCOIN, PREMIER_LEAUGE } from "../constants";

test("Create session", async ({ page }) => {
  const sesh = new Sesh(page);
  await page.goto(BASE_URL);

  await sesh.articleOpen.nth(0).click();
  await page.waitForRequest("https://web-writer.alfa.smartlook.cloud/**");
  await sesh.dialogHeadline.click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogClose.click();
  await page.waitForTimeout(10000);

  await sesh.topbarSearchNavButton.click();
  await sesh.searchInput.type(BITCOIN);
  await sesh.articleOpen.nth(0).click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogClose.click();
  await sesh.searchInput.clear();
  await page.waitForTimeout(10000);

  await sesh.searchInput.type(PREMIER_LEAUGE);
  await page.waitForRequest("https://newsapi.org/**");
  await sesh.articleOpen.nth(0).click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogClose.click();
  await sesh.topbarFavoritesNavButton.click();
  await page.waitForTimeout(10000);

  await sesh.favoritesHeadline.click();
  await sesh.articleOpen.nth(0).click();
  await page.waitForTimeout(10000);
});
