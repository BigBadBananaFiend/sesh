import { FC, useEffect } from "react";
import { Box, Newspaper, VStack } from "../libs";
import { Outlet } from "react-router";
import { Topbar } from "../components/Topbar";

export const AppWrapper: FC = () => {
  useEffect(() => {
    const topbar = document.getElementById("topbar");
    const content = document.getElementById("content");

    const callback = () => {
      console.log("yeah");
      if (content && topbar) {
        if (content?.scrollTop > 10) {
          topbar.style.boxShadow = "rgba(0, 0, 0, 0.15) 0 5px 15px";
          topbar.style.transition = "box-shadow 0.3s ease-in-out";
          return;
        }

        if (content.scrollTop <= 10) {
          topbar.style.boxShadow = "none";
          return;
        }
      }
    };

    content?.addEventListener("scroll", callback);
    return () => {
      content?.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      backgroundColor="#FDF5DF"
    >
      <Topbar />
      <Box
        height="calc(100vh - 80px)"
        margin="80px 0 0"
        display="flex"
        justifyContent="center"
        overflow="auto"
        id="content"
      >
        <Outlet />
      </Box>
    </Box>
  );
};
