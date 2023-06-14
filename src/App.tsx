import { useState } from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "./globalStyle";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <h1>hello</h1>
      <h2>hello</h2>
      <p>hello</p>
    </>
  );
}

export default App;
