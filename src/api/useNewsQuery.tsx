import { QueryOptions, UseQueryResult, useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { ENDPOINTS } from "./endpoints";
import { IResponse } from "./types";

interface IFetcherParams {
  searchTerm: string;
}

const fetcher = async ({ searchTerm }: IFetcherParams): Promise<IResponse> => {
  const response = await axios.get(ENDPOINTS.news(searchTerm));

  return response.data as IResponse;
};

export const useNewsQuery = (
  params: IFetcherParams,
  options?: QueryOptions<IResponse, AxiosError>
): UseQueryResult<IResponse, AxiosError> => {
  const { searchTerm } = params;
  const queryKey = [`news/${searchTerm}`];
  const queryFn = () => fetcher({ searchTerm });

  return useQuery(queryKey, queryFn, {
    enabled: false,
    refetchOnWindowFocus: false,
    ...options,
  });
};
