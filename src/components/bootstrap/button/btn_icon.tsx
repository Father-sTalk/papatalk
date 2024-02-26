import React from "react";

import { ICON } from "@/assets/icon";

interface Props {
  icon: keyof typeof ICON;
  text: string;
  onClick?: () => void;
}
const BtnIcon: React.FC<Props> = ({ icon, text, onClick }) => {
  const IconComponent = ICON[icon];
  return (
    <div
      className="h-[3.8rem] flex gap-sm items-center p-sm border border-default-300 rounded-md"
      onClick={onClick}
    >
      <IconComponent size={{ width: 20, height: 20 }} />
      <span className="text-button">{text}</span>
    </div>
  );
};

export default BtnIcon;
