import React from "react";

import { BtnBasic } from "../button/btn_basic";

interface Props {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "default";
  text?: string;
  onFileChange: (file: File | null) => void;
}

const InputFile: React.FC<Props> = ({ size, color, text, onFileChange }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFileChange(e.target.files?.[0] || null);
  };
  const buttonText = text || "이미지 선택";
  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <BtnBasic onClick={handleButtonClick} color={color} size={size}>
        {buttonText}
      </BtnBasic>
    </div>
  );
};

export default InputFile;
