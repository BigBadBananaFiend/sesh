import { FC } from "react";
import { Box, HStack, VStack } from "../libs";
import { BsNewspaper } from "react-icons/bs";

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
      <HStack gap="18px" alignItems="center">
        <BsNewspaper size={25} />
        <h4>24 hours old news</h4>
      </HStack>
    </Box>
  );
};
