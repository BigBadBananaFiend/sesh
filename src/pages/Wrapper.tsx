import { FC } from "react";
import { Box } from "../libs";
import { Outlet } from "react-router";
import { Topbar } from "../components/Topbar";

export const AppWrapper: FC = () => (
  <Box
    width="100vw"
    height="100vh"
    overflow="hidden"
    display="flex"
    flexDirection="column"
  >
    <Topbar />
    <Box
      height="calc(100vh - 80px)"
      margin="120px 60px"
      display="flex"
      justifyContent="center"
    >
      <Outlet />
    </Box>
  </Box>
);
