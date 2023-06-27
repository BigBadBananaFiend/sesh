import { FC } from "react";
import { useTopHeadlinesQuery } from "../api/useTopHeadlinesQuery";
import { NewsBox } from "../components/NewsBox";
import { ContentWrapper, NewsWrapper } from "../components/Wrappers";
import { Box, Text, colors } from "../libs";
import Skeleton from "react-loading-skeleton";

export const Headlines: FC = () => {
  const { isLoading, data } = useTopHeadlinesQuery();

  return (
    <ContentWrapper>
      <Text as={"h5"} color={colors.red.dark}>
        today's top headlines.
      </Text>
      <NewsWrapper
        shouldExpand={data?.articles ? data?.articles.length >= 4 : true}
      >
        {isLoading &&
          new Array<number>(15).fill(1).map(() => (
            <Box width="100%">
              <Skeleton height={300} borderRadius={"12px"} />
            </Box>
          ))}
        {data?.articles.map((a) => (
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
