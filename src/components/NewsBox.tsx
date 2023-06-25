/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC } from "react";
import { IArticle } from "../api/types";
import { Box, HStack, Newspaper, VStack, colors } from "../libs";
import styled from "@emotion/styled";
import { Text } from "../libs";
import { RiBookOpenLine } from "react-icons/ri";

interface INewsBoxProps extends Partial<IArticle> {}

const StyledImage = styled.img`
  filter: grayscale(100%);
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const NewsBox: FC<INewsBoxProps> = ({
  title,
  author,
  description,
  urlToImage,
}) => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.05) 10px 10px 15px"
      padding="16px 18px"
      borderRadius="12px"
      width="100%"
    >
      <VStack>
        <Box width={"100%"} height="200px" borderRadius={"12px"}>
          <StyledImage src={urlToImage ?? ""} />
        </Box>
        <Text color={colors.red.regular} as={"h6"}>
          {title}
        </Text>
        <Box display="inline-block">
          <Text color={colors.blue.regular} as={"span"} fontWeight={700}>
            Author:&nbsp;
          </Text>
          <Text>{author ?? "Unknown"}</Text>
        </Box>

        <Box display="inline-block">
          <Text color={colors.blue.regular} as={"span"} fontWeight={700}>
            Description:&nbsp;
          </Text>
          <Text>{description ?? "Not available"}</Text>
        </Box>
        <HStack>
          <RiBookOpenLine size={20} />
        </HStack>
      </VStack>
    </Box>
  );
};
