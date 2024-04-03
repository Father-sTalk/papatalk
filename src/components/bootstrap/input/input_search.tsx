import React from "react";

import { Input } from "@nextui-org/react";

import { ICON } from "@/assets/icon";

interface Props {
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onEnter?: () => void;
}
const InputSearch: React.FC<Props> = ({
  value,
  placeholder = "검색 입력 후 엔터를 눌러주세요.",
  setValue,
  onEnter,
}) => {
  const onClear = () => {
    setValue("");
  };
  return (
    <Input
      isClearable
      value={value}
      variant="bordered"
      onChange={(e) => setValue(e.target.value)}
      onClear={onClear}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onEnter) {
          e.preventDefault();
          onEnter();
        }
      }}
      size="sm"
      radius="md"
      className="w-[22rem]"
      classNames={{
        input: [
          "h-[1.25rem]",
          "py-2",
          "bg-transparent",
          "text-black/90",
          "placeholder:text-default-700/50",
        ],
        innerWrapper: ["flex", "items-center", "justify-between"],
        inputWrapper: [
          "h-[1.25rem]",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      placeholder={placeholder}
      startContent={
        <ICON.search color="default" size={{ width: 16, height: 16 }} />
      }
    />
  );
};

export default InputSearch;
