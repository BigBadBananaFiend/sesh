import { Locator, expect, test } from "@playwright/test";
import { Sesh } from "../pom/sesh.pom";
import { BASE_URL, BITCOIN, PREMIER_LEAUGE } from "../constants";

test("Create session", async ({ page }) => {
  const sesh = new Sesh(page);
  await page.goto(BASE_URL);

  const initWait = async () =>
    page.evaluate(() => {
      return new Promise((res) => {
        window.addEventListener("forward", res);
      });
    });

  await initWait();

  await sesh.articleOpen.nth(0).click();
  await sesh.dialogHeadline.click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogCopyText.click();
  await sesh.dialogClose.click();

  await sesh.topbarFavoritesNavButton.click();
  await expect(sesh.articleContainer).toHaveCount(1);
  await sesh.topbarSearchNavButton.click();

  await sesh.searchInput.fill(BITCOIN);
  await expect(sesh.articleContainer.first()).toBeVisible();
  await sesh.articleOpen.first().click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogClose.click();

  await sesh.topbarFavoritesNavButton.click();
  await expect(sesh.articleContainer).toHaveCount(2);
  await sesh.topbarSearchNavButton.click();

  await sesh.searchInput.fill(PREMIER_LEAUGE);
  await expect(sesh.articleContainer.first()).toBeVisible();
  await sesh.articleOpen.nth(0).click();
  await sesh.dialogAddToFavorites.click();
  await sesh.dialogClose.click();

  await sesh.topbarFavoritesNavButton.click();
  await expect(sesh.articleContainer).toHaveCount(3);

  await sesh.articleAddToFavorites.first().click();
  await expect(sesh.articleContainer).toHaveCount(2);
});
