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
      email: "charlie.parker@bird.com",
    });

    Smartlook.track("appOpened", {});

    const forceHoldRobot = async () => {
      const dispatch = async () => {
        await new Promise((res) => setTimeout(res, 2000));
        const e = new Event("forward");
        window.dispatchEvent(e);
      };
      await dispatch();
    };

    forceHoldRobot();
  }, []);

  return (
    <RecoilRoot>
      <Global styles={globalStyle} />
      {router()}
    </RecoilRoot>
  );
}

export default App;
