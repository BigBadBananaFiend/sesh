/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppWrapper } from "./pages/Wrapper";
import { TopHeadlines } from "./components/TopHeadlines";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<AppWrapper />}>
        <Route index={true} element={<Navigate to={"/top-headlines"} />} />
        <Route path={"top-headlines"} element={<TopHeadlines />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
