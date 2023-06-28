import { test, expect } from "@playwright/test";
import { Sesh } from "../pom/sesh.pom";
import { BASE_URL, BITCOIN, PREMIER_LEAUGE } from "../constants";

test("Create session", async ({ page }) => {
  const sesh = new Sesh(page);
  await page.goto(BASE_URL);

  await sesh.articleOpen.nth(0).click();
  await sesh.dialogHeadline.click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogClose.click();

  await sesh.topbarSearchNavButton.click();
  await sesh.searchInput.type(BITCOIN);
  await sesh.articleOpen.nth(0).click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogClose.click();
  await sesh.searchInput.clear();

  await sesh.searchInput.type(PREMIER_LEAUGE);
  await page.waitForRequest("https://newsapi.org/**");
  await sesh.articleOpen.nth(0).click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogClose.click();
  await sesh.topbarFavoritesNavButton.click();

  await sesh.favoritesHeadline.click();
  await sesh.articleOpen.nth(0).click();
  const href = await sesh.articleHref.nth(0).getAttribute("href");
  await page.goto(href ?? BASE_URL);
});
