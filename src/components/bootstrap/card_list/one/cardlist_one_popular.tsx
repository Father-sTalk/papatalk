import React from "react";

import { ICON } from "@/assets/icon";
import { makeCardFormat } from "@/utils/card/makeCardFormat";

import CardOne from "../../card/card_one";
interface Props {
  cardList?: PopularCommunityArticle[];
}

const CardListPopular: React.FC<Props> = ({ cardList }) => {
  const cardOneFormat = makeCardFormat.One(cardList);
  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <ICON.rank color="black" />
        <p className="text-h4">인기글 모아보기</p>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        {cardOneFormat?.map((article) => (
          <CardOne key={article.id} card={article} />
        ))}
      </div>
    </article>
  );
};

export default CardListPopular;
