export interface IArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

export interface IResponse {
  totalResults: number;
  articles: IArticle[];
}
