import { FC } from "react";
import { useTopHeadlinesQuery } from "../api/useTopHeadlinesQuery";
import { NewsBox } from "../components/NewsBox";
import { ContentWrapper, NewsWrapper } from "../components/Wrappers";
import { Text, colors } from "../libs";

export const Headlines: FC = () => {
  const { isLoading, isError, data } = useTopHeadlinesQuery();

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError || !data) {
    return <>Error fetching data</>;
  }

  return (
    <ContentWrapper>
      <Text as={"h5"} color={colors.red.dark}>
        today's top headlines.
      </Text>
      <NewsWrapper>
        {data.articles.map((a) => (
          <NewsBox
            title={a.title}
            author={a.author}
            description={a.description}
            url={a.url}
            urlToImage={a.urlToImage}
          />
        ))}
      </NewsWrapper>
    </ContentWrapper>
  );
};
