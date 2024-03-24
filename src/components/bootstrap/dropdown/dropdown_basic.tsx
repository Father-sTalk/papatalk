import React from "react";

import type { Selection } from "@nextui-org/react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { ICON } from "@/assets/icon";

import { BtnBasic } from "../button/btn_basic";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OnSelectionChange = ((keys: Selection) => any) | undefined;

interface YearDropdownProps {
  list: number[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const DropdownBasic: React.FC<YearDropdownProps> = ({
  list,
  selected,
  setSelected,
}) => {
  const changeHandler: OnSelectionChange = (keys: Selection) => {
    if (keys instanceof Set) {
      setSelected(keys?.values().next().value);
    }
  };

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <BtnBasic bordered="default" className="flex justify-between">
          {selected}
          <ICON.chevronDown />
        </BtnBasic>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        selectionMode="single"
        selectedKeys={[selected]}
        onSelectionChange={changeHandler}
        className="h-40 overflow-scroll"
      >
        {list.map((year) => (
          <DropdownItem key={year} value={year}>
            {year}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownBasic;
