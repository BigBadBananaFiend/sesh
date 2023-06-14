import { FC } from "react";
import { Box } from "../libs";

export const Topbar: FC = () => {
  return (
    <Box
      width="100vw"
      height="80px"
      position="fixed"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
    >
      <h4>News fetcher</h4>
    </Box>
  );
};
