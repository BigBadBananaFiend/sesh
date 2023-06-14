import { Global } from "@emotion/react";
import { globalStyle } from "./globalStyle";
import { useNewsQuery } from "./api/useNewsQuery";
import { FC, useEffect } from "react";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      {Fetch()}
      <h2>hello</h2>
      <p>hello</p>
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
