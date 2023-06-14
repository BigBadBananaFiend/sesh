import { Global } from "@emotion/react";
import { globalStyle } from "./globalStyle";
import { useNewsQuery } from "./api/useNewsQuery";
import { FC, useEffect } from "react";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Home />
      {Fetch()}
    </>
  );
}

export default App;

function Fetch() {
  const { data, refetch } = useNewsQuery({ searchTerm: "biden" });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <h5>hello my boi</h5>
    </>
  );
}
