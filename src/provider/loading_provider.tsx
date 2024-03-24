import React from "react";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";

import useUserStore from "@/store/store_user";

interface Props {
  children: React.ReactNode;
}
const LoadingProvider: React.FC<Props> = ({ children }) => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const { nickname } = useUserStore();
  return (
    <React.Fragment>
      {isFetching !== 0 && (
        <Toast text="다른 파파야들의 이야기를 가져오고 있어요. 파파야에서 어떤 이야기들이 있는지 확인중이예요." />
      )}
      {isMutating !== 0 && (
        <Toast
          text={`${nickname ?? "파파"}님의 요청사항을 파파야에 전달하고 있어요. 잠시만 기다려주세요.`}
        />
      )}
      {children}
    </React.Fragment>
  );
};

export default LoadingProvider;
interface ToastProps {
  text: string;
}
const Toast: React.FC<ToastProps> = ({ text }) => {
  return (
    <div className="fixed top-10 left-1/2 z-toast -translate-x-1/2 p-6 bg-layout_divider rounded-xl">
      {text}
    </div>
  );
};
