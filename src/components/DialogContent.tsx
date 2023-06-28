/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC, useEffect, useState } from "react";
import { INewsBoxProps, StyledImage } from ".";
import { Box, HStack, Text, VStack, colors } from "../libs";
import { IMAGE_PLACEHOLDER } from "../constants";
import styled from "@emotion/styled";
import Skeleton from "react-loading-skeleton";
import { IconButton } from "../libs/ui/IconButton";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useFavoriteItem } from "../hooks/useFavoriteItem";
import Smartlook from "smartlook-client";

interface IDialogContentProps extends Omit<INewsBoxProps, "description"> {}

export const StyledAnchor = styled("a")`
  all: unset;
  text-decoration: none;
  cursor: pointer;
`;

export const DialogContent: FC<IDialogContentProps> = ({
  urlToImage,
  title,
  author,
  content,
  url,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { isFavorite, handleSetFavorite } = useFavoriteItem(title ?? "");
  const imgUrl = urlToImage ?? IMAGE_PLACEHOLDER;

  useEffect(() => {
    Smartlook.track("dialogOpen", {});

    return () => {
      Smartlook.track("dialogClose", {});
    };
  }, []);

  return (
    <VStack>
      <Box width={"100%"} height="200px">
        <StyledImage
          src={imgUrl}
          onError={(e) => (e.currentTarget.src = IMAGE_PLACEHOLDER)}
          isLoaded={isImageLoaded}
          onLoad={() => setIsImageLoaded(true)}
        />
        {!isImageLoaded && <Skeleton height={"100%"} borderRadius={"12px"} />}
      </Box>
      <Text as={"h5"} color={colors.red.dark} data-testid="dialog-headline">
        {title}
      </Text>
      <Box display="inline-block">
        <Text color={colors.blue.regular} as={"span"} fontWeight={700}>
          Author:&nbsp;
        </Text>
        <Text>{author ?? "Unknown"}</Text>
      </Box>
      <Text as={"p"}>{content}</Text>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        {!url && <Text as={"span"}>Full story not available</Text>}
        {url && (
          <StyledAnchor
            href={url}
            target="_blank"
            data-testid="dialog-article-href"
          >
            <Text as={"span"} color={colors.red.regular}>
              Read the whole story
            </Text>
          </StyledAnchor>
        )}
        <IconButton
          data-testid="dialog-add-to-favorites"
          onClick={() =>
            handleSetFavorite({
              urlToImage,
              url,
              author,
              content,
            })
          }
          icon={
            isFavorite ? (
              <AiFillStar color={colors.red.light} size={20} />
            ) : (
              <AiOutlineStar color={colors.red.light} size={20} />
            )
          }
        />
      </HStack>
    </VStack>
  );
};
