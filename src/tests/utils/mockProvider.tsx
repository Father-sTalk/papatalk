"use client";
import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import "../styles/global/reset.css";
import "../styles/global/globals.css";
import "../styles/designSystem/colorSystem.css";
import "../styles/designSystem/sizeSystem.css";
import queryClient from "@/constants/single/queryClient";

interface Props {
  children: React.ReactNode;
}

const MockProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="w-full flex flex-col items-center justify-center">
        {children}
      </section>
      <div id="portal" />
    </QueryClientProvider>
  );
};

export default MockProvider;
