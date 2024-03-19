import React from "react";

import { iconColor } from "../../config/iconColor";

interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

const CustomIcon: React.FC<Props> = ({ color = "primary", size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size?.width || 24}
      height={size?.height || 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.1896 14.7618L18.1896 6.17751L9.60532 6.17751"
        stroke={iconColor[color]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.98684 18.0073L17.8875 6.10669"
        stroke={iconColor[color]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CustomIcon;
