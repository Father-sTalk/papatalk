import React from "react";

import { ICON } from "@/assets/icon";

import SkeletonCardOne from "../card/skeleton_card_one";

const SkeletonCardlistOnePopular = () => {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <ICON.rank color="black" />
        <p className="text-h4">인기글 모아보기</p>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        {Array(4)
          .fill(null)
          .map((_, idx) => (
            <SkeletonCardOne key={idx} />
          ))}
      </div>
    </article>
  );
};

export default SkeletonCardlistOnePopular;
