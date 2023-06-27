import { FC, useMemo } from "react";
import { useFavoriteItem } from "../hooks/useFavoriteItem";
import Skeleton from "react-loading-skeleton";
import { ContentWrapper, NewsWrapper, NewsBox } from "../components";
import { colors, Box, Text } from "../libs";
import { useFavorites } from "../hooks/useFavorites";

export const Favorites: FC = () => {
  const { favorites } = useFavorites();
  return (
    <ContentWrapper>
      <Text as={"h5"} color={colors.red.dark}>
        your favorites.
      </Text>
      <NewsWrapper shouldExpand={favorites ? favorites.length >= 4 : true}>
        {favorites?.map((a) => (
          <NewsBox
            title={a.title}
            author={a.author}
            description={a.description}
            url={a.url}
            urlToImage={a.urlToImage}
            content={a.content?.split("[+").shift() ?? null}
          />
        ))}
      </NewsWrapper>
    </ContentWrapper>
  );
};
