import React from "react";

import Image from "next/image";

interface Props {
  card: {
    thumbnail: string;
    title: string;
    authorNickname: string;
    view: number;
    likes: number;
  };
}

const CardOne: React.FC<Props> = ({ card }) => {
  return (
    <article className="w-full h-[6.5rem] flex gap-lg p-lg border border-default-300 rounded-md">
      <Image
        src={card?.thumbnail ?? ""}
        width={120}
        height={120}
        alt="card_img"
        className="min-w-[7.5rem]"
      />
      <div className="flex flex-col justify-between min-w-0">
        <div className="flex flex-col gap-sm min-w-0">
          <span className="w-full text-subtitle1 line-clamp-2 break-words">
            {card?.title}
          </span>
          <span className="text-body2 break-words">{card?.authorNickname}</span>
        </div>
        <div className="text-body2">
          <span className="pr-[0.8rem] border-r-1 border-primary-900">
            조회수 {card?.view}
          </span>
          <span className="pl-[0.8rem]">공감 수 {card?.likes}</span>
        </div>
      </div>
    </article>
  );
};

export default CardOne;
