import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import queryClient from "@/constants/single/queryClient";

import ProviderLoading from "./provider_loading";
interface Props {
  children: React.ReactNode;
}

const ProviderQuery: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderLoading>{children}</ProviderLoading>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default ProviderQuery;
