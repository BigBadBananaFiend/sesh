export interface IArticle {
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  publishedAt: string | null;
  urlToImage: string | null;
}

export interface IResponse {
  totalResults: number;
  articles: IArticle[];
}
