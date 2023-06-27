import { Global } from "@emotion/react";
import { globalStyle } from "./globalStyle";
import router from "./routes";
import "react-loading-skeleton/dist/skeleton.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Global styles={globalStyle} />
      {router()}
    </RecoilRoot>
  );
}

export default App;
