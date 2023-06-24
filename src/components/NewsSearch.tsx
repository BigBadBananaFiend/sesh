import { FC, useEffect, useState } from "react";
import { useDebounce } from "../hooks";
import { VStack } from "../libs";
import { useNewsQuery } from "../api";

export const NewsSearch: FC = () => {
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
    <VStack>
      <label>Search for news</label>
      <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    </VStack>
  );
};
