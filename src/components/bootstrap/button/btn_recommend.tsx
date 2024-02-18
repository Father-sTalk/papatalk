import React from "react";

import { ICON } from "@/assets/icon";

interface Props {
  recommend: boolean;
  onClick?: () => void;
}
const BtnRecommend: React.FC<Props> = ({ recommend, onClick }) => {
  return (
    <div className="flex gap-sm" onClick={onClick}>
      <ICON.thumb up={recommend} />
      <span
        className={`text-button ${
          recommend ? "text-primary-500" : "text-default-900"
        }`}
      >
        추천
      </span>
    </div>
  );
};

export default BtnRecommend;
