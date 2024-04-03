import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import queryClient from "@/constants/single/queryClient";

import LoadingProvider from "./loading_provider";
interface Props {
  children: React.ReactNode;
}

const QueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>{children}</LoadingProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default QueryProvider;
