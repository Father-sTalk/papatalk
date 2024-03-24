import React from "react";

import { ICON } from "@/assets/icon";

interface Props {
  checked: boolean;
  text: string;
  bold?: boolean;
  onClickList: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheckBoxBasic: React.FC<Props> = ({
  checked,
  text,
  bold,
  onClickList,
}) => {
  return (
    <div
      role="button"
      onClick={() => onClickList((prev) => !prev)}
      className="flex gap-2 items-center cursor-pointer"
    >
      <ICON.checkBox checked={checked} />
      <span
        className={`${bold ? "text-subtitle2" : "text-button"} text-layout_black`}
      >
        {text}
      </span>
    </div>
  );
};

export default CheckBoxBasic;
