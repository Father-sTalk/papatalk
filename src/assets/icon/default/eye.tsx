import React from "react";

import { iconColor } from "@/assets/config/iconColor";

interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

const EyeIcon: React.FC<Props> = ({ color = "primary", size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size?.width || 20}
      height={size?.height || 20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12Z"
        fill={iconColor[color]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.458008 10C1.73201 5.943 5.52201 3 10 3C14.478 3 18.268 5.943 19.542 10C18.268 14.057 14.478 17 10 17C5.52201 17 1.73201 14.057 0.458008 10ZM14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14C8.93914 14 7.92173 13.5786 7.17158 12.8284C6.42143 12.0783 6.00001 11.0609 6.00001 10C6.00001 8.93913 6.42143 7.92172 7.17158 7.17157C7.92173 6.42143 8.93914 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10Z"
        fill={iconColor[color]}
      />
    </svg>
  );
};

export default EyeIcon;
