"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";

import "../styles/global/reset.css";
import "../styles/global/globals.css";
import "../styles/designSystem/colorSystem.css";
import "../styles/designSystem/textSystem.css";
import "../styles/designSystem/sizeSystem.css";
import "swiper/css";
import ContainerDefault from "@/components/bootstrap/container/container_default";

import ProviderAuth from "./provider_auth";
import ProviderQuery from "./provider_query";
import ProviderStack from "./provider_stack";

interface Props {
  children: React.ReactNode;
}

const ProviderSetting: React.FC<Props> = ({ children }) => {
  return (
    <ProviderQuery>
      <NextUIProvider>
        <ProviderAuth>
          <ProviderStack>
            <ContainerDefault>{children}</ContainerDefault>
          </ProviderStack>
        </ProviderAuth>
        <div id="portal" />
      </NextUIProvider>
    </ProviderQuery>
  );
};

export default ProviderSetting;
