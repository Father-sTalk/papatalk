"use client";
import React from "react";

import useGetAccessByRefresh from "@/models/hooks/auth/get_accessByRefresh.hooks";
import useUserStore from "@/store/store_user";
interface Props {
  children: React.ReactNode;
}
const ProviderAuth: React.FC<Props> = ({ children }) => {
  const { mutate } = useGetAccessByRefresh();
  const { initialize } = useUserStore();
  React.useEffect(() => {
    mutate();
    initialize();
  }, [initialize, mutate]);
  return <React.Fragment>{children}</React.Fragment>;
};

export default ProviderAuth;
