import { Global } from "@emotion/react";
import { globalStyle } from "./globalStyle";
import router from "./routes";
import "react-loading-skeleton/dist/skeleton.css";
import { RecoilRoot } from "recoil";
import Smartlook from "smartlook-client";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Smartlook.identify(1738, {
      name: "Charlie Parker",
      email: "bird@bop.com",
    });
  }, []);

  return (
    <RecoilRoot>
      <Global styles={globalStyle} />
      {router()}
    </RecoilRoot>
  );
}

export default App;
