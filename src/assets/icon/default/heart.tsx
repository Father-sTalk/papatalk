import React from "react";

import { iconColor } from "@/assets/config/iconColor";

interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

const HeartIcon: React.FC<Props> = ({ color = "primary", size }) => {
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
        d="M2.53759 4.13757C3.13768 3.53766 3.95147 3.20065 4.79999 3.20065C5.64852 3.20065 6.46231 3.53766 7.06239 4.13757L7.99999 5.07437L8.93759 4.13757C9.23278 3.83193 9.58589 3.58815 9.9763 3.42044C10.3667 3.25273 10.7866 3.16446 11.2115 3.16077C11.6364 3.15707 12.0578 3.23804 12.451 3.39894C12.8443 3.55984 13.2016 3.79745 13.5021 4.0979C13.8025 4.39836 14.0401 4.75565 14.201 5.14891C14.3619 5.54218 14.4429 5.96356 14.4392 6.38845C14.4355 6.81334 14.3472 7.23325 14.1795 7.62366C14.0118 8.01407 13.768 8.36718 13.4624 8.66237L7.99999 14.1256L2.53759 8.66237C1.93769 8.06228 1.60068 7.24849 1.60068 6.39997C1.60068 5.55144 1.93769 4.73766 2.53759 4.13757Z"
        fill={iconColor[color]}
      />
    </svg>
  );
};

export default HeartIcon;
