import { QueryOptions, UseQueryResult, useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { ENDPOINTS } from "./ENDPOINTS";

interface IFetcherParams {
  searchTerm: string;
}

interface IArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

interface IResponse {
  totalResults: number;
  articles: IArticle[];
}

const fetcher = async ({ searchTerm }: IFetcherParams): Promise<IResponse> => {
  const response = await axios.get(ENDPOINTS.index(searchTerm));

  return response.data as IResponse;
};

export const useNewsQuery = (
  params: IFetcherParams,
  options?: QueryOptions<IResponse, AxiosError>
): UseQueryResult<IResponse, AxiosError> => {
  const { searchTerm } = params;
  const queryKey = [`news/${searchTerm}`];
  const queryFn = () => fetcher({ searchTerm });

  return useQuery(queryKey, queryFn, { ...options });
};
