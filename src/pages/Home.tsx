import { FC } from "react";
import { Topbar } from "../components/Topbar";
import { Box } from "../libs";
import { TopHeadlines } from "../components/TopHeadlines";

export const Home: FC = () => {
  return (
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
        <TopHeadlines />
      </Box>
    </Box>
  );
};
