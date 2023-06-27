import { atom } from "recoil";
import { IArticle } from "../api/types";

type RawStorage = Record<string, IArticle>;

export const favorites = atom<IArticle[] | null>({
  key: "favorites",
  default: null,
});

export const rawStorage = atom<RawStorage | null>({
  key: "rawStorage",
  default: null,
});

export const keys = atom<Set<string> | null>({
  key: "keys",
  default: null,
});
