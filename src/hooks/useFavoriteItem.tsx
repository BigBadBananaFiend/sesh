import { useCallback, useMemo } from "react";
import { useFavorites } from "./useFavorites";
import { IArticle } from "../api/types";

const ARTICLES_KEY = "articles";

export const useFavoriteItem = (title: string) => {
  const { keys, getFavorites, rawStorage } = useFavorites();

  const getHash = useCallback(() => {
    let hash = "";
    new Array(10).fill(1).forEach((_, i) => {
      hash += title.charCodeAt(i);
    });
    return hash;
  }, [title]);

  const hash = getHash();
  const isFavorite = useMemo(() => keys?.has(hash), [hash, keys]);

  const addFavoriteItem = useCallback(
    (args: Partial<IArticle>) => {
      const articles = {
        ...rawStorage,
        [hash]: {
          ...args,
        },
      };
      window.localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
      getFavorites();
    },
    [getFavorites, hash, rawStorage]
  );

  const deleteFavoriteItem = useCallback(() => {
    if (rawStorage && hash in rawStorage) {
      const { [hash]: _, ...rest } = rawStorage;
      window.localStorage.setItem(ARTICLES_KEY, JSON.stringify(rest));
      getFavorites();
    }
  }, [getFavorites, hash, rawStorage]);

  const handleSetFavorite = useCallback(
    (args: Partial<Omit<IArticle, "title">>) => {
      if (!hash) {
        return;
      }

      if (isFavorite) {
        deleteFavoriteItem();
        return;
      }

      addFavoriteItem({
        title,
        ...args,
      });
    },
    [isFavorite, addFavoriteItem, deleteFavoriteItem, hash, title]
  );

  return useMemo(
    () => ({ isFavorite, handleSetFavorite, getFavorites }),
    [handleSetFavorite, isFavorite, getFavorites]
  );
};
