import React from "react";

import { Input } from "@nextui-org/react";
interface Props {
  value: string;
  placeholder: string;
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validation?: boolean;
  checkDuplication?: boolean;
  validateMessage?: string;
}
const InputWithLabel: React.FC<Props> = ({
  value,
  placeholder: plackholder,
  label,
  setValue,
  validation,
  validateMessage,
  checkDuplication,
}) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <span>{label}</span>
      <Input
        type="email"
        value={value}
        onChange={changeValue}
        color={validation && !checkDuplication ? "default" : "danger"}
        placeholder={plackholder}
        className="text-base"
      />
      {validation && checkDuplication && <span>{validateMessage}</span>}
    </div>
  );
};

export default InputWithLabel;
