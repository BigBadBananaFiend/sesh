import { QueryOptions, UseQueryResult, useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { ENDPOINTS } from "./endpoints";
import { IResponse } from "./types";

const fetcher = async (): Promise<IResponse> => {
  const response = await axios.get(ENDPOINTS.headlines);

  return response.data as IResponse;
};

export const useTopHeadlinesQuery = (
  options?: QueryOptions<IResponse, AxiosError>
): UseQueryResult<IResponse, AxiosError> => {
  const queryKey = [`news/headlines`];
  const queryFn = () => fetcher();

  return useQuery(queryKey, queryFn, { ...options });
};
