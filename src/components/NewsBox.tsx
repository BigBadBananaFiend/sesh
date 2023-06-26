/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC } from "react";
import { IArticle } from "../api/types";
import { Box, HStack, VStack, colors } from "../libs";
import styled from "@emotion/styled";
import { Text } from "../libs";
import { RiBookOpenLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { IconButton } from "../libs/ui/IconButton";
import { IMAGE_PLACEHOLDER } from "../constants";

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
  url,
}) => {
  const handleRedirect = () => {
    if (!url) {
      return;
    }

    window.location.replace(url);
  };
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.05) 10px 10px 15px"
      padding="16px 18px"
      borderRadius="12px"
      width="100%"
      display="flex"
      flexDirection="column"
    >
      <VStack height="100%">
        <Box width={"100%"} height="200px" borderRadius={"12px"}>
          <StyledImage
            src={urlToImage ?? IMAGE_PLACEHOLDER}
            onError={(e) => (e.currentTarget.src = IMAGE_PLACEHOLDER)}
          />
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
      </VStack>
      <HStack alignSelf="end">
        <IconButton
          icon={<RiBookOpenLine color={colors.red.light} size={20} />}
        />
        <IconButton
          icon={<FiExternalLink color={colors.red.light} size={20} />}
          onClick={() => handleRedirect()}
        />
      </HStack>
    </Box>
  );
};
