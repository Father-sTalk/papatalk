import React from "react";

interface BaseButtonProps {
  text: string;
  size: "large" | "mid" | "small";
  onClick?: () => void;
}

interface StandardButtonProps extends BaseButtonProps {
  type: "primary" | "disabled";
}

interface CustomButtonProps extends BaseButtonProps {
  type: "custom";
  customColor: string;
}

type ButtonProps = StandardButtonProps | CustomButtonProps;

const Button: React.FC<ButtonProps> = ({
  text,
  size,
  type,
  onClick,
  ...props
}) => {
  const sizeClasses = {
    large: "py-2 px-4 text-lg",
    mid: "py-1.5 px-3 text-base",
    small: "py-1 px-2 text-sm",
  };

  const typeClasses = {
    primary: "bg-papa-primary text-white",
    disabled: "bg-fg-disabled text-fg-disabled",
    custom: "",
  };
  if (type === "custom") {
    const { customColor } = props as CustomButtonProps;
    typeClasses.custom = customColor;
  }

  const baseClasses = "rounded border-none focus:outline-none";
  const disabled = type === "disabled";

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${type === "custom" ? typeClasses.custom : typeClasses[type]}
  `;

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
