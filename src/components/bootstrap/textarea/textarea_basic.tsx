import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
}

const TextareaBasic: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  rows = 10,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full h-full resize-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950 ${className ?? ""}`}
    />
  );
};

export default TextareaBasic;
