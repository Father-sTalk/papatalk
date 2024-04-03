import React from "react";

import { ICON } from "@/assets/icon";

interface Props {
  liked: boolean;
  count: number;
  onClick?: () => void;
}
const BtnLike: React.FC<Props> = ({ liked, count, onClick }) => {
  return (
    <div
      role="button"
      className="h-[2.375rem] flex gap-md items-center p-md border border-default-300 rounded-md"
      onClick={onClick}
    >
      <ICON.heart color={liked ? "selected" : "unselected"} />
      <span
        className={`text-button ${
          liked ? "text-primary-500" : "text-default-900"
        }`}
      >
        {count}
      </span>
    </div>
  );
};

export default BtnLike;
