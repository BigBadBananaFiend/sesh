import { Page, Locator } from "@playwright/test";

export class Sesh {
  readonly page: Page;
  readonly dialogHeadline: Locator;
  readonly dialogArticleHref: Locator;
  readonly dialogAddToFavorites: Locator;
  readonly dialogClose: Locator;
  readonly dialogCopyText: Locator;
  readonly articleContainer: Locator;
  readonly articleHref: Locator;
  readonly articleAddToFavorites: Locator;
  readonly articleOpen: Locator;
  readonly topbarHeadline: Locator;
  readonly topbarHeadlinesNavButton: Locator;
  readonly topbarSearchNavButton: Locator;
  readonly topbarFavoritesNavButton: Locator;
  readonly favoritesHeadline: Locator;
  readonly headlinesHeadline: Locator;
  readonly searchHeadline: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialogHeadline = page.locator('[data-testid="dialog-headline"]');
    this.dialogArticleHref = page.locator(
      '[data-testid="dialog-article-href"]'
    );
    this.dialogAddToFavorites = page.locator(
      '[data-testid="dialog-add-to-favorites"]'
    );
    this.dialogClose = page.locator('[data-testid="dialog-close"]');
    this.dialogCopyText = page.locator('[data-testid="dialog-copy-text"]');
    this.articleContainer = page.locator('[data-testid="article-container"]');
    this.articleHref = page.locator('[data-testid="article-href"]');
    this.articleAddToFavorites = page.locator(
      '[data-testid="article-add-to-favorites"]'
    );
    this.articleOpen = page.locator('[data-testid="article-open"]');
    this.topbarHeadline = page.locator('[data-testid="topbar-headline"]');
    this.topbarHeadlinesNavButton = page.locator(
      '[data-testid="topbar-headlines-nav-button"]'
    );
    this.topbarSearchNavButton = page.locator(
      '[data-testid="topbar-search-nav-button"]'
    );
    this.topbarFavoritesNavButton = page.locator(
      '[data-testid="topbar-favorites-nav-button"]'
    );
    this.favoritesHeadline = page.locator('[data-testid="favorites-headline"]');
    this.headlinesHeadline = page.locator('[data-testid="headlines-headline"]');
    this.searchHeadline = page.locator('[data-testid="search-headline"]');
    this.searchInput = page.locator('[data-testid="search-input"]');
  }
}
