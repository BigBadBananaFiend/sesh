import { FC } from "react";
import { useTopHeadlinesQuery } from "../api/useTopHeadlinesQuery";
import { Box } from "../libs";
import { NewsBox } from "../components/NewsBox";
import styled from "@emotion/styled";
import { IArticle } from "../api/types";

const StyledBox = styled.div`
  width: 100%;
  display: grid;
  padding: 40px 120px;
  grid-template-columns: repeat(auto-fit, 550px);
  grid-template-rows: repeat(300px);
  justify-items: center;
  gap: 20px;
  justify-content: center;
`;

export const TopHeadlines: FC = () => {
  const { isLoading, isError, data } = useTopHeadlinesQuery();

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError || !data) {
    return <>Error fetching data</>;
  }

  //
  return (
    <StyledBox>
      {data.articles.map((a) => (
        <NewsBox
          title={a.title}
          author={a.author}
          description={a.description}
          url={a.url}
          urlToImage={a.urlToImage}
        />
      ))}
    </StyledBox>
  );
};
