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

interface Props {
  list: string[];
  selected: string;
  size?: "sm" | "md" | "lg";
  setSelected: (value: string) => void;
}

const DropdownBasic: React.FC<Props> = ({
  list,
  selected,
  size,
  setSelected,
}) => {
  const changeHandler: OnSelectionChange = (keys: Selection) => {
    if (keys instanceof Set && keys?.values().next().value !== undefined) {
      setSelected(keys?.values().next().value);
    }
  };

  return (
    <Dropdown
      classNames={{
        trigger: ["w-[7.75rem]"],
        content: ["min-w-[7.75rem]"],
      }}
    >
      <DropdownTrigger className={`w-[7.75rem] ${size === "sm" && "h-[2rem]"}`}>
        <BtnBasic bordered="default" className="flex justify-between">
          <p className="text-layout_black">{selected}</p>
          <ICON.chevronDown />
        </BtnBasic>
      </DropdownTrigger>
      <DropdownMenu
        classNames={{
          list: ["max-h-40 overflow-scroll"],
          base: ["w-[7.75rem]"],
        }}
        aria-label="Static Actions"
        selectionMode="single"
        selectedKeys={[selected]}
        onSelectionChange={changeHandler}
      >
        {list.map((item) => (
          <DropdownItem key={item} value={item} textValue={item}>
            <p className="text-layout_black">{item}</p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownBasic;
