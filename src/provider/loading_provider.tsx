import React from "react";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}
const LoadingProvider: React.FC<Props> = ({ children }) => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  if (isFetching) return <div>loading...</div>;
  if (isMutating) return <div>mutating...</div>;
  return <React.Fragment>{children}</React.Fragment>;
};

export default LoadingProvider;
