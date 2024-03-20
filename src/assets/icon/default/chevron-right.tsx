import React from "react";

import { iconColor } from "@/assets/config/iconColor";

interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

const ChevronRight: React.FC<Props> = ({ color = "default", size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size?.width || 24}
      height={size?.height || 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 5L16 12L9 19"
        stroke={iconColor[color] || iconColor.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
