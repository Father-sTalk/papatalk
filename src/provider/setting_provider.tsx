"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";

import "../styles/global/reset.css";
import "../styles/global/globals.css";
import "../styles/designSystem/colorSystem.css";
import "../styles/designSystem/textSystem.css";
import "../styles/designSystem/sizeSystem.css";
import "swiper/css";
import DefaultContainer from "@/components/bootstrap/container/default_container";

import QueryProvider from "./query_provider";

interface Props {
  children: React.ReactNode;
}

const SettingProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryProvider>
      <NextUIProvider>
        <DefaultContainer>{children}</DefaultContainer>
        <div id="portal" />
      </NextUIProvider>
    </QueryProvider>
  );
};

export default SettingProvider;
