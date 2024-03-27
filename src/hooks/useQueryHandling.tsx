import { UseQueryResult, useQuery } from "@tanstack/react-query";

function useQueryHandling<TQueryFnData>(
  queryFn: () => Promise<TQueryFnData>,
  queryKey: string
): UseQueryResult<TQueryFnData> {
  return useQuery({
    queryFn,
    queryKey: [queryKey],
  });
}

export default useQueryHandling;
