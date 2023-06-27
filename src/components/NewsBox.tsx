/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC, useState } from "react";
import { IArticle } from "../api/types";
import { Box, Dialog, HStack, VStack, colors } from "../libs";
import styled from "@emotion/styled";
import { Text } from "../libs";
import { RiBookOpenLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { IconButton } from "../libs/ui/IconButton";
import { IMAGE_PLACEHOLDER } from "../constants";
import { DialogContent, StyledAnchor } from "./DialogContent";
import Skeleton from "react-loading-skeleton";
import { useFavoriteItem } from "../hooks/useFavoriteItem";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export interface INewsBoxProps extends IArticle {}

interface IStyledImageProps {
  isLoaded?: boolean;
}

export const StyledImage = styled.img<IStyledImageProps>`
  filter: grayscale(100%);
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: ${(props) => !props.isLoaded && "none"};
`;

export const NewsBox: FC<INewsBoxProps> = ({
  title,
  author,
  description,
  urlToImage,
  url,
  content,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { handleSetFavorite, isFavorite } = useFavoriteItem(title ?? "");
  const imgUrl = urlToImage ?? IMAGE_PLACEHOLDER;

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
            src={imgUrl}
            onError={(e) => (e.currentTarget.src = IMAGE_PLACEHOLDER)}
            onLoad={() => setIsImageLoaded(true)}
            isLoaded={isImageLoaded}
          />
          {!isImageLoaded && <Skeleton height={"100%"} borderRadius={"12px"} />}
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
        <Dialog
          trigger={
            <IconButton
              icon={<RiBookOpenLine color={colors.red.light} size={20} />}
            />
          }
        >
          <DialogContent
            urlToImage={urlToImage}
            content={content}
            title={title}
            author={author}
            url={url}
          />
        </Dialog>
        <IconButton
          icon={
            <StyledAnchor href={url ?? ""} target="_blank">
              <FiExternalLink color={colors.red.light} size={20} />
            </StyledAnchor>
          }
        />
        <IconButton
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
    </Box>
  );
};
