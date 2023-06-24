/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC } from "react";
import { IArticle } from "../api/types";
import { Box, VStack } from "../libs";

interface INewsBoxProps extends Partial<IArticle> {}

export const NewsBox: FC<INewsBoxProps> = ({ title, author, description }) => {
  return (
    <Box>
      <VStack>
        <h5>{title}</h5>
        <span>Author: {author ?? "Unknown"}</span>
        <p>{description}</p>
      </VStack>
    </Box>
  );
};
