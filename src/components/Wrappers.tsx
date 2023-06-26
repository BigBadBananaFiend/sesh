import { FC, useEffect } from "react";
import { Box } from "../libs";
import { Outlet } from "react-router";
import { Topbar } from "./Topbar";
import styled from "@emotion/styled";

export const AppWrapper: FC = () => {
  useEffect(() => {
    const topbar = document.getElementById("topbar");
    const content = document.getElementById("content");

    const callback = () => {
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
    <Box width="100vw" height="100vh" display="flex" backgroundColor="#FDF5DF">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        width="100%"
        overflow="hidden"
      >
        <Topbar />
        <Box margin="80px 0 0" overflow="auto" id="content">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export const NewsWrapper = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  gap: 40px;
  justify-content: start;
`;

export const ContentWrapper = styled(Box)`
  width: 100%;
  display: flex;
  padding: 40px 80px;
  flex-direction: column;
  gap: 20px;
`;
