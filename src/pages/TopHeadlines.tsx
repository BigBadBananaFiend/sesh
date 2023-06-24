import { FC } from "react";
import { useTopHeadlinesQuery } from "../api/useTopHeadlinesQuery";
import { Box } from "../libs";
import { NewsBox } from "../components/NewsBox";

export const TopHeadlines: FC = () => {
  const { isLoading, isError, data } = useTopHeadlinesQuery();

  console.log(data);

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError || !data) {
    return <>Error fetching data</>;
  }

  return (
    <Box>
      {data.articles.map((d) => (
        <NewsBox
          title={d.title}
          author={d.author}
          description={d.description}
        />
      ))}
    </Box>
  );
};
