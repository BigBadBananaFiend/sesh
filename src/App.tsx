import { Global } from "@emotion/react";
import { globalStyle } from "./globalStyle";
import router from "./routes";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      {router()}
    </>
  );
}

export default App;
