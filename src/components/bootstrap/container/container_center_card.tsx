import React from "react";
interface Props {
  children: React.ReactNode;
}
const ContainerCenterCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-var(--h-header))] flex justify-center items-center bg-primary-50">
      <div className="bg-layout_background rounded-xl w-[30rem] p-11">
        {children}
      </div>
    </div>
  );
};

export default ContainerCenterCard;
