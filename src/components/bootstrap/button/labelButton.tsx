import React from "react";

interface LabelProps {
  text: string;
  bgColorClass: string;
  textColorClass: string;
  size: "large" | "mid" | "small";
  onClick?: () => void;
}

const Label: React.FC<LabelProps> = ({
  text,
  bgColorClass,
  textColorClass,
  size,
  onClick,
}) => {
  const sizeClasses = {
    large: "text-lg py-2 px-4",
    mid: "text-base py-1.5 px-3",
    small: "text-sm py-1 px-2",
  };

  const baseClasses = "rounded-full shadow-lg";
  const styleClasses = `${sizeClasses[size]} ${bgColorClass} ${textColorClass}`;

  return (
    <span className={`${baseClasses} ${styleClasses}`} onClick={onClick}>
      {text}
    </span>
  );
};

export default Label;
