import { FC } from "react";
import { useTopHeadlinesQuery } from "../api/useTopHeadlinesQuery";
import { Box } from "../libs";

export const TopHeadlines: FC = () => {
  const { isLoading, isError, data } = useTopHeadlinesQuery();

  console.log(data);

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    return <>Error fetching data</>;
  }

  return (
    <Box>
      <h2>Top headlines</h2>
    </Box>
  );
};
