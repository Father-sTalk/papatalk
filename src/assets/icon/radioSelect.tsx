import React from "react";

import { iconColor } from "../config/iconColor";
interface Props {
  checked: boolean;
  size?: { width: number; height: number };
}
const RadioSelectIcon: React.FC<Props> = ({ checked, size }) => {
  if (checked) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size?.width || 16}
        height={size?.height || 16}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          fill={iconColor.primary}
        />
        <path
          d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z"
          fill={iconColor.primary}
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size?.width || 16}
        height={size?.height || 16}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          fill={iconColor.primary}
        />
      </svg>
    );
  }
};

export default RadioSelectIcon;
