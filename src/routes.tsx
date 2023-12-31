/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppWrapper } from "./components/Wrappers";
import { Headlines } from "./pages/Headlines";
import { Search } from "./pages/Search";
import { Favorites } from "./pages/Favorites";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<AppWrapper />}>
        <Route index={true} element={<Navigate to={"headlines"} />} />
        <Route path={"headlines"} element={<Headlines />} />
        <Route path={"search"} element={<Search />} />
        <Route path={"favorites"} element={<Favorites />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export const routes = {
  headlines: "/headlines",
  search: "/search",
  favorites: "/favorites",
};
