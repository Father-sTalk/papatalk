import React from "react";

import type { ButtonProps } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { ButtonType } from "@/@types/enum/enums";

interface Props extends ButtonProps {
  customType: Enums.ButtonType;
}
const BasicButton: React.FC<Props> = ({ customType, ...buttonProps }) => {
  switch (customType) {
    case ButtonType.default:
      return <Button {...buttonProps} />;
    case ButtonType.hover:
      return <Button {...buttonProps} />;
    case ButtonType.disabled:
      return <Button {...buttonProps} />;
  }
};

export default BasicButton;
