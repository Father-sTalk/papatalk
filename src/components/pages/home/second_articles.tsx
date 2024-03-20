import React from "react";

import Image from "next/image";

import { ICON } from "@/assets/icon";

const articles = [
  {
    descriptions: ["나의 소중한 아내 임신을 했는데..", "어떻게 해야할까요?"],
    imgSrc: "/img/home/second_article_1.png",
    path: "/sos",
  },
  {
    descriptions: ["아빠가 해야할 육아는 따로 있나요?"],
    imgSrc: "/img/home/second_article_2.png",
    path: "/sos",
  },
  {
    descriptions: ["아내가 없이", "아기와 둘이 있는 순간이 두려워요.."],
    imgSrc: "/img/home/second_article_3.png",
    path: "/sos",
  },
];
const SecondArticles = () => {
  return (
    <section>
      <article className="flex flex-col gap-2 p-6">
        <div className="flex justify-between">
          <p className="text-article text-layout_black">
            다른 파파야들과 함께 고민을 나눠보아요.
          </p>
          <div className="flex items-center">
            <span className="text-menu text-primary-500">더 보기</span>
            <ICON.chevronRight
              color="primary"
              size={{ width: 14, height: 14 }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <Image
                src={article.imgSrc}
                alt="article image"
                width={400}
                height={200}
              />
              <div className="w-[87%] absolute flex justify-between top-6 left-6 text-subtitle1 text-white">
                <div>
                  {article.descriptions.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>
                <ICON.arrowUp color="white" />
              </div>
            </div>
          ))}
        </div>
      </article>
      <article className="p-6">
        <div className="flex justify-between p-6 bg-secondary-50 rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="text-h3 text-layout_black">
              <p>예비 파파야분들</p>
              <p>현역 파파야분들에게 SOS를 외쳐보세요!</p>
            </div>
            <div
              className="flex gap-2 items-center text-secondary-500 text-text-subtitle2"
              role="button"
            >
              <span>아빠들의 멘토링 공간 살펴보기</span>
              <ICON.chevronRight
                color="secondary"
                size={{ width: 16, height: 16 }}
              />
            </div>
          </div>
          <Image
            src="/img/home/second_article_sos.png"
            alt="landing_image"
            width={576}
            height={170}
          />
        </div>
      </article>
    </section>
  );
};

export default SecondArticles;
