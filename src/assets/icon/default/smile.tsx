import React from "react";

import { iconColor } from "@/assets/config/iconColor";
interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

const SmileIcon: React.FC<Props> = ({ color = "yellow", size }) => {
  return (
    <svg
      width={size?.width || 20}
      height={size?.height || 20}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
    >
      <circle cx="32" cy="32" r="30" fill={iconColor[color]} />
      <circle className="fill-black" cx="20.5" cy="24" r="3.5" />
      <circle className="fill-black" cx="43.5" cy="24" r="3.5" />
      <path
        className="fill-black"
        d="M32,44c-5.52,0-10-4.48-10-10h2c0,4.41,3.59,8,8,8s8-3.59,8-8h2C42,39.52,37.52,44,32,44z"
      />
    </svg>
  );
};

export default SmileIcon;
