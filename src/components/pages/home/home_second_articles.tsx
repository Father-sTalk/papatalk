import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { CommunityTabsEnum } from "@/@types/enum/enums";
import { ICON } from "@/assets/icon";
import { useCommunityTabStore } from "@/store/store_community_tab";

const articles = [
  {
    title: "자유게시판",
    descriptions: "자유롭게 다른 파파야들과 함께 고민을 나눠보아요.",
    imgSrc: "/img/home/second_article_1.png",
    path: "/community",
    tab: CommunityTabsEnum.free,
  },
  {
    title: "임신",
    descriptions:
      "선물 같이 찾아온 아이, 하지만 우리 모두가 아빠는 처음이라서 궁금한 점들이 많을거예요.",
    imgSrc: "/img/home/second_article_2.png",
    path: "/community",
    tab: CommunityTabsEnum.pregnancy,
  },
  {
    title: "육아",
    descriptions: "다른 파파야들의 생생한 육아 경험기들을 만나보세요.",
    imgSrc: "/img/home/second_article_3.png",
    path: "/community",
    tab: CommunityTabsEnum.childcare,
  },
];
const SecondArticles = () => {
  const { setTab } = useCommunityTabStore();

  const router = useRouter();
  return (
    <section>
      <article className="flex flex-col gap-4 p-6">
        <p className="text-h3 text-layout_black">
          파파야는 아빠들만을 위한 소통창고의 서비스를 제공합니다.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 items-start border border-layout_divider rounded-2xl p-4"
            >
              <Image
                src={article.imgSrc}
                alt="article image"
                width={400}
                height={200}
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4 h-ssBox">
                  <p className="text-subtitle1 text-txt">{article.title}</p>
                  <p className="text-subtitle1 text-default-500">
                    {article.descriptions}
                  </p>
                </div>
                <div
                  role="button"
                  className="flex flex-row gap-1 items-center"
                  onClick={() => {
                    setTab(article.tab);
                    router.push(article.path);
                  }}
                >
                  <span className="text-primary-500 text-button">바로가기</span>
                  <ICON.arrowUp
                    color="primary"
                    size={{ width: 16, height: 16 }}
                  />
                </div>
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
              onClick={() => router.push("/sos")}
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
