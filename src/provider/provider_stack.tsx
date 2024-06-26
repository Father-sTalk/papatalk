import React from "react";

import Modal from "@/components/bootstrap/container/container_modal";
interface Props {
  children: React.ReactNode;
}
const ProviderStack: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Modal />
      {children}
    </React.Fragment>
  );
};

export default ProviderStack;
