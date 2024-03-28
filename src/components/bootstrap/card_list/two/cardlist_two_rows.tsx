import React from "react";

import { makeCardFormat } from "@/utils/card/makeCardFormat";

import CardTwo from "../../card/card_two";
interface Props {
  cardList?: SosArticle[];
}
const CardListTwoRows: React.FC<Props> = ({ cardList }) => {
  const articleList = makeCardFormat.Two(cardList);
  return (
    <article className="flex flex-col gap-4">
      {articleList?.map((article) => (
        <CardTwo key={article.id} card={article} />
      ))}
    </article>
  );
};

export default CardListTwoRows;
