import React from "react";

import { BtnBasic } from "../button/btn_basic";

interface Props {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "default";
  onFileChange: (file: File | null) => void;
}

const InputFile: React.FC<Props> = ({ size, color, onFileChange }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFileChange(e.target.files?.[0] || null);
  };
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
        이미지 선택
      </BtnBasic>
    </div>
  );
};

export default InputFile;
