import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LoadingProvider from "./loading_provider";
interface Props {
  children: React.ReactNode;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
    },
  },
});

const QueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>{children}</LoadingProvider>
    </QueryClientProvider>
  );
};

export default QueryProvider;
