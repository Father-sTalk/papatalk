import React from "react";

import { iconColor } from "@/assets/config/iconColor";

interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

const ChevronDown: React.FC<Props> = ({ color = "default", size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size?.width || 20}
      height={size?.height || 20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29279 7.29301C5.48031 7.10553 5.73462 7.00022 5.99979 7.00022C6.26495 7.00022 6.51926 7.10553 6.70679 7.29301L9.99979 10.586L13.2928 7.29301C13.385 7.19749 13.4954 7.12131 13.6174 7.0689C13.7394 7.01649 13.8706 6.98891 14.0034 6.98775C14.1362 6.9866 14.2678 7.0119 14.3907 7.06218C14.5136 7.11246 14.6253 7.18672 14.7192 7.28061C14.8131 7.3745 14.8873 7.48615 14.9376 7.60905C14.9879 7.73195 15.0132 7.86363 15.012 7.99641C15.0109 8.12919 14.9833 8.26041 14.9309 8.38241C14.8785 8.50441 14.8023 8.61476 14.7068 8.707L10.7068 12.707C10.5193 12.8945 10.265 12.9998 9.99979 12.9998C9.73462 12.9998 9.48031 12.8945 9.29279 12.707L5.29279 8.707C5.10532 8.51948 5 8.26517 5 8C5 7.73484 5.10532 7.48053 5.29279 7.29301Z"
        fill={iconColor[color] || iconColor.primary}
      />
    </svg>
  );
};

export default ChevronDown;
