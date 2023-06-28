import { FC } from "react";
import { ContentWrapper, NewsWrapper, NewsBox } from "../components";
import { colors, Text } from "../libs";
import { useFavorites } from "../hooks/useFavorites";

export const Favorites: FC = () => {
  const { favorites } = useFavorites();
  return (
    <ContentWrapper>
      <Text as={"h5"} color={colors.red.dark} data-testid="favorites-headline">
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
