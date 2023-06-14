import { API_KEY } from "../constants";

export const ENDPOINTS = {
  index: (searchTerm: string) =>
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`,
};
