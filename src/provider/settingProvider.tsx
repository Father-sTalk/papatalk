"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/global/reset.css";
import "../styles/global/globals.css";
import "../styles/designSystem/colorSystem.css";
import "../styles/designSystem/sizeSystem.css";

import "swiper/css";
import DefaultContainer from "@/components/bootstrap/container/defaultContainer";

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
const SettingProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultContainer>{children}</DefaultContainer>
      <div id="portal" />
    </QueryClientProvider>
  );
};

export default SettingProvider;
