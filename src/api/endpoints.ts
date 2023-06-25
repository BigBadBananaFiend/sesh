import { API_KEY } from "../constants";

export const ENDPOINTS = {
  news: (searchTerm: string) =>
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}&pageSize=20`,
  headlines: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=10`,
};
