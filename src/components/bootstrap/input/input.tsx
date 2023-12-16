import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  setValue,
}) => {
  const baseClasses =
    "border px-2 py-1 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-100";

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
      className={baseClasses}
    />
  );
};

export default Input;
