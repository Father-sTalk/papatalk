import React from "react";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";

import useUserStore from "@/store/store_user";

interface Props {
  children: React.ReactNode;
}
const ProviderLoading: React.FC<Props> = ({ children }) => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const { nickname } = useUserStore();

  const [isFetchingToastVisible, setIsFetchingToastVisible] =
    React.useState(false);
  const [isMutatingToastVisible, setIsMutatingToastVisible] =
    React.useState(false);

  const isFetchingRef = React.useRef<NodeJS.Timeout | null>(null);
  const isMutatingRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (isFetching !== 0) {
      setIsFetchingToastVisible(true);
      isFetchingRef.current = setTimeout(() => {
        setIsFetchingToastVisible(false);
      }, 500);
    }
  }, [isFetching]);
  React.useEffect(() => {
    if (isFetching === 0 && isMutating !== 0) {
      setIsMutatingToastVisible(true);
      isMutatingRef.current = setTimeout(() => {
        setIsMutatingToastVisible(false);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMutating]);

  React.useEffect(() => {
    return () => {
      if (isFetchingRef.current) {
        clearTimeout(isFetchingRef.current);
      }
      if (isMutatingRef.current) {
        clearTimeout(isMutatingRef.current);
      }
    };
  }, []);

  return (
    <React.Fragment>
      {isFetchingToastVisible && (
        <Toast text="다른 파파야들의 이야기를 가져오고 있어요. 파파야에서 어떤 이야기들이 있는지 확인중이예요." />
      )}
      {isMutatingToastVisible && (
        <Toast
          text={`${nickname ?? "파파"}님의 요청사항을 파파야에 전달하고 있어요. 잠시만 기다려주세요.`}
        />
      )}
      {children}
    </React.Fragment>
  );
};

export default ProviderLoading;
interface ToastProps {
  text: string;
}
const Toast: React.FC<ToastProps> = ({ text }) => {
  return (
    <div className="fixed top-10 left-1/2 z-toast -translate-x-1/2 p-6 bg-secondary-50 rounded-xl">
      {text}
    </div>
  );
};
