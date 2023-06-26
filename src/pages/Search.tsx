/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { useDebounce } from "../hooks";
import { Box, Input, colors } from "../libs";
import { useNewsQuery } from "../api";
import { AiOutlineSearch } from "react-icons/ai";
import { ContentWrapper, NewsBox, NewsWrapper } from "../components";
import { Text } from "../libs";

export const Search: FC = () => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value);
  const { data, refetch } = useNewsQuery({ searchTerm: debouncedValue });

  useEffect(() => {
    if (!debouncedValue) {
      return;
    }
    refetch();
  }, [debouncedValue]);

  console.log(data);

  return (
    <ContentWrapper>
      <Text as={"h5"} color={colors.red.dark}>
        search headlines.
      </Text>
      <Box display={"flex"} width="300px">
        <Input
          startAddon={<AiOutlineSearch size={25} />}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </Box>
      <NewsWrapper>
        {data?.articles.map((a) => (
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
