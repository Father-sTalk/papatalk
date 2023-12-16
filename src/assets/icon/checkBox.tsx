import React from "react";

import { iconColor } from "../config/iconColor";
interface Props {
  checked: boolean;
  size?: { width: number; height: number };
}
const CheckBoxIcon: React.FC<Props> = ({ checked, size }) => {
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
          d="M8.17832e-06 3.01C-0.0009149 2.61447 0.0763109 2.22264 0.22725 1.85704C0.37819 1.49143 0.599869 1.15925 0.879557 0.879557C1.15925 0.599869 1.49143 0.37819 1.85704 0.22725C2.22264 0.0763109 2.61447 -0.0009149 3.01001 8.17832e-06H12.99C13.3855 -0.0009149 13.7774 0.0763109 14.143 0.22725C14.5086 0.37819 14.8408 0.599869 15.1204 0.879557C15.4001 1.15925 15.6218 1.49143 15.7728 1.85704C15.9237 2.22264 16.0009 2.61447 16 3.01V12.99C16.0009 13.3855 15.9237 13.7774 15.7728 14.143C15.6218 14.5086 15.4001 14.8408 15.1204 15.1204C14.8408 15.4001 14.5086 15.6218 14.143 15.7727C13.7774 15.9237 13.3855 16.0009 12.99 16H3.01001C2.61447 16.0009 2.22264 15.9237 1.85704 15.7727C1.49143 15.6218 1.15925 15.4001 0.879557 15.1204C0.599869 14.8408 0.37819 14.5086 0.22725 14.143C0.0763109 13.7774 -0.0009149 13.3855 8.17832e-06 12.99V3.01ZM1.00001 3.006V12.994C1.00001 14.103 1.89801 15 3.00601 15H12.994C13.2575 15.0001 13.5184 14.9483 13.7618 14.8476C14.0053 14.7468 14.2264 14.599 14.4127 14.4127C14.599 14.2264 14.7468 14.0053 14.8476 13.7618C14.9483 13.5184 15.0001 13.2575 15 12.994V3.006C15.0001 2.74254 14.9483 2.48163 14.8476 2.23819C14.7468 1.99475 14.599 1.77356 14.4127 1.58726C14.2264 1.40096 14.0053 1.2532 13.7618 1.15244C13.5184 1.05167 13.2575 0.999876 12.994 1.00001H3.00601C2.74254 0.999876 2.48163 1.05167 2.23819 1.15244C1.99475 1.2532 1.77356 1.40096 1.58726 1.58726C1.40096 1.77356 1.2532 1.99475 1.15244 2.23819C1.05167 2.48163 0.999876 2.74254 1.00001 3.006ZM5.944 12.305L3.678 10.106C3.53659 9.97002 3.42376 9.80717 3.34614 9.627C3.26852 9.44683 3.22767 9.25296 3.22599 9.05679C3.22431 8.86061 3.26184 8.66608 3.33637 8.4846C3.4109 8.30313 3.52093 8.13837 3.66 8C3.79625 7.86099 3.95961 7.75147 4.13996 7.67824C4.3203 7.60502 4.51378 7.56965 4.70836 7.57434C4.90295 7.57903 5.0945 7.62367 5.2711 7.7055C5.44771 7.78733 5.60562 7.90459 5.735 8.05L6.322 8.691C6.36486 8.73907 6.41724 8.77772 6.47582 8.80449C6.5344 8.83126 6.5979 8.84557 6.6623 8.84651C6.7267 8.84745 6.7906 8.835 6.84993 8.80995C6.90927 8.7849 6.96276 8.7478 7.007 8.701L10.551 5.025C10.6862 4.8819 10.8488 4.76745 11.0291 4.68846C11.2095 4.60948 11.4038 4.56757 11.6007 4.56524C11.7976 4.56291 11.9929 4.6002 12.175 4.67489C12.3572 4.74958 12.5224 4.86014 12.661 5C13.251 5.59 13.241 6.533 12.649 7.115L7.377 12.296C7.18593 12.483 6.92968 12.5885 6.66232 12.5902C6.39496 12.5918 6.13741 12.4896 5.944 12.305Z"
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
          d="M0 3.00948C0 1.34739 1.33663 0 3.00948 0H12.9905C14.6526 0 16 1.33663 16 3.00948V12.9905C16 14.6526 14.6634 16 12.9905 16H3.00948C1.34739 16 0 14.6634 0 12.9905V3.00948ZM1 3.00586V12.9941C1 14.1029 1.89805 15 3.00586 15H12.9941C14.1029 15 15 14.1019 15 12.9941V3.00586C15 1.89706 14.1019 1 12.9941 1H3.00586C1.89706 1 1 1.89805 1 3.00586Z"
          fill={iconColor.primary}
        />
      </svg>
    );
  }
};

export default CheckBoxIcon;