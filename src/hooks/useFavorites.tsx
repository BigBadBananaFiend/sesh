import { useCallback, useEffect, useMemo } from "react";
import { IArticle } from "../api/types";
import { useRecoilState } from "recoil";
import {
  rawStorage as _rawStorage,
  favorites as _favorites,
  keys as _keys,
} from "../data/state";

const ARTICLES_KEY = "articles";

type ArticlesStorage = Record<string, IArticle>;

export const useFavorites = () => {
  const [rawStorage, setRawStorage] = useRecoilState(_rawStorage);
  const [favorites, setFavorites] = useRecoilState(_favorites);
  const [keys, setKeys] = useRecoilState(_keys);

  const getFavorites = useCallback(() => {
    const articles = window.localStorage.getItem(ARTICLES_KEY);
    if (!articles) {
      return null;
    }
    const parsedArticles = JSON.parse(articles) as ArticlesStorage;
    setRawStorage(parsedArticles);
    setKeys(new Set(Object.keys(parsedArticles)));
    setFavorites([...Object.values(parsedArticles)]);
  }, []);

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return useMemo(
    () => ({
      getFavorites,
      keys,
      favorites,
      rawStorage,
    }),
    [favorites, getFavorites, keys, rawStorage]
  );
};
