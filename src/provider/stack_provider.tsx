import React from "react";

import Modal from "@/components/bootstrap/container/modal_container";
interface Props {
  children: React.ReactNode;
}
const StackProvider: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Modal />
      {children}
    </React.Fragment>
  );
};

export default StackProvider;
