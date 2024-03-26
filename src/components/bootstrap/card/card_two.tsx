import React from "react";

import { dateToString } from "@/utils/formatter/dateToString";

import CardButton from "./card_button";
interface Props {
  card: {
    title: string;
    content: string;
    view: number;
    likes: number;
    replies: number;
    createdAt: string;
  };
}
const CardTwo: React.FC<Props> = ({ card }) => {
  const dateStr = dateToString(card?.createdAt);
  return (
    <article className="w-full flex flex-col gap-sm p-md border border-default-300 rounded-md">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-sm min-w-0 py-sm">
          <span className="w-full text-subtitle1 truncate">{card?.title}</span>
          <span className="w-full text-body2 truncate">{card?.content}</span>
        </div>
        <div className="flex gap-md">
          <CardButton count={card?.view} type="review" />
          <CardButton count={card?.likes} type="likes" />
          <CardButton count={card?.replies} type="reply" />
        </div>
      </div>
      <p className="text-right text-button">{dateStr}</p>
    </article>
  );
};

export default CardTwo;
