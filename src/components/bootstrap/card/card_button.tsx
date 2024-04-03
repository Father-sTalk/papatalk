import React from "react";

import { ICON } from "@/assets/icon";
interface Props {
  count: number;
  type: "review" | "likes" | "reply";
}
const CardButton: React.FC<Props> = ({ count, type }) => {
  const icon =
    type === "review" ? (
      <ICON.eye color="purple" size={{ width: 16, height: 16 }} />
    ) : type === "likes" ? (
      <ICON.heart color="purple" size={{ width: 16, height: 16 }} />
    ) : (
      <ICON.chatAlt2 color="purple" size={{ width: 16, height: 16 }} />
    );
  const text =
    type === "review" ? "조회 수" : type === "likes" ? "공감 수" : "답변 수";
  return (
    <div className="w-[6rem] flex flex-col gap-sm justify-center items-center p-[1rem] bg-secondary-50 rounded-md">
      <span className="text-button">{count}</span>
      <div className="flex gap-sm">
        {icon}
        <span className="text-button text-secondary-500">{text}</span>
      </div>
    </div>
  );
};

export default CardButton;
