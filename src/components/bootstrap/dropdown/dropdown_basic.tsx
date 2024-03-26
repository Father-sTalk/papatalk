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
  list: string[];
  selected: string;
  setSelected: (value: string) => void;
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
      <DropdownTrigger className="w-[7.75rem]">
        <BtnBasic bordered="default" className="flex justify-between">
          <p className="text-layout_black">{selected}</p>
          <ICON.chevronDown />
        </BtnBasic>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        selectionMode="single"
        selectedKeys={[selected]}
        onSelectionChange={changeHandler}
        className="max-h-40 overflow-scroll"
      >
        {list.map((item) => (
          <DropdownItem key={item} value={item}>
            <p className="text-layout_black">{item}</p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownBasic;
