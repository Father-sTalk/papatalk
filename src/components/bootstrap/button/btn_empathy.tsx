import React from "react";

import { ICON } from "@/assets/icon";

interface Props {
  empathied: boolean;
  count: number;
  onClick?: () => void;
}
const BtnEmpathy: React.FC<Props> = ({ empathied, count, onClick }) => {
  return (
    <div
      className="h-[2.375rem] flex gap-sm items-center p-sm border border-default-300 rounded-md"
      onClick={onClick}
    >
      <ICON.heart color={empathied ? "selected" : "unselected"} />
      <span
        className={`text-button ${
          empathied ? "text-primary-500" : "text-default-900"
        }`}
      >
        {count}
      </span>
    </div>
  );
};

export default BtnEmpathy;
