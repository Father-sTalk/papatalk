import React from "react";

import { Avatar } from "@nextui-org/react";

import { dateToString } from "@/utils/formatter/dateToString";

import BtnEmpathy from "../button/btn_empathy";
import BtnIcon from "../button/btn_icon";
interface Props {
  card: {
    user: {
      id: string;
      nickname: string;
      profileImg: string;
    };
    title: string;
    content: string;
    view: number;
    empathy: number;
    empathied: boolean;
    createdAt: string;
  };
}
const CardThree: React.FC<Props> = ({ card }) => {
  const dateStr = dateToString(card?.createdAt);

  return (
    <article className="w-full min-w-0 h-[24.5rem] flex flex-col justify-between p-md border border-default-300 rounded-md">
      <div className="flex flex-col gap-xxl min-w-0">
        <div className="flex flex-col gap-md min-w-0">
          <span className="w-full text-h4 truncate">{card?.title}</span>
          <div className="flex gap-sm">
            <Avatar src={card?.user.profileImg} size="lg" />
            <div className="flex flex-col gap-sm text-caption">
              <span>{card?.user.nickname}</span>
              <span>{dateStr}</span>
            </div>
          </div>
        </div>
        <span className="w-full text-body2 line-clamp-2 break-words">
          {card?.content}
        </span>
      </div>
      <div className="flex gap-sm">
        <BtnIcon icon="eye" text={card?.view.toString()} />
        <BtnEmpathy count={card?.empathy} empathied={card?.empathied} />
      </div>
    </article>
  );
};

export default CardThree;
