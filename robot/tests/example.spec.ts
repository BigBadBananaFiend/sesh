import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Expect a title "to contain" a substring.
  await page.getByTestId("topbar").click();
  await page.getByTestId("topbar-headline").click();
  await page.getByTestId("article-container").first().click();
  await page.getByTestId("add-to-favorites").first().click();
});
