import React from "react";

import { iconColor } from "@/assets/config/iconColor";

interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

export const SearchIcon: React.FC<Props> = ({ color = "default", size }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size?.height || 20}
    role="presentation"
    viewBox="0 0 24 24"
    width={size?.width || 20}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke={iconColor[color] || iconColor.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke={iconColor[color] || iconColor.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
