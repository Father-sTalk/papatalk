import React from "react";

import { ICON } from "@/assets/icon";

import CheckBoxBasic from "./checkbox_basic";

interface Props {
  checked: boolean;
  text: string;
  bold?: boolean;
  onClickList: React.Dispatch<React.SetStateAction<boolean>>;
  onClickChevron: () => void;
}
const CheckBoxRight: React.FC<Props> = ({
  checked,
  text,
  bold,
  onClickList,
  onClickChevron,
}) => {
  return (
    <div className="flex justify-between items-center">
      <CheckBoxBasic
        checked={checked}
        text={text}
        bold={bold}
        onClickList={onClickList}
      />
      <div role="button" onClick={onClickChevron}>
        <ICON.chevronRight />
      </div>
    </div>
  );
};

export default CheckBoxRight;
