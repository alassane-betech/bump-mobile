import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
    mutations: {},
  },
});

export enum QueryKeys {
  USER = "user",
}
