/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppWrapper } from "./pages/Wrapper";
import { TopHeadlines } from "./pages/TopHeadlines";
import { NewsSearch } from "./components/NewsSearch";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<AppWrapper />}>
        <Route index={true} element={<Navigate to={"/top-headlines"} />} />
        <Route path={"top-headlines"} element={<TopHeadlines />} />
        <Route path={"news-search"} element={<NewsSearch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
