import React from "react";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}
const LoadingProvider: React.FC<Props> = ({ children }) => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    <React.Fragment>
      {isFetching !== 0 && <div>loading...</div>}
      {isMutating !== 0 && <div>mutating...</div>}
      {children}
    </React.Fragment>
  );
};

export default LoadingProvider;
