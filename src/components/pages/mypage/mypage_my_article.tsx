import React from "react";

import { Pagination } from "@nextui-org/react";

import { ContentsTypeEnum } from "@/@types/enum/enums";
import ListBasic from "@/components/bootstrap/list/list_basic";
import { useMypageArticleTabStore } from "@/store/store_mypage_article_tab";

import MypageTabs from "./mypage_my_article_tab";

const data: ApiResponse.UsersApiTypes.MyArticleResponse = {
  contentsList: [
    {
      contentsType: ContentsTypeEnum.community,
      id: 1,
      title: "test",
      authorNickname: "a",
      createdAt: "2024-03-06T02:24:34.920Z",
      views: 0,
      likes: 0,
    },
    {
      contentsType: ContentsTypeEnum.sos,
      id: 2,
      title: "test",
      authorNickname: "a",
      createdAt: "2024-03-06T02:24:34.920Z",
      views: 0,
      likes: 0,
    },
    {
      contentsType: ContentsTypeEnum.community,
      id: 9,
      title: "testa",
      authorNickname: "a",
      createdAt: "2024-03-06T04:36:51.728Z",
      views: 0,
      likes: 0,
    },
  ],
  totalCount: 22,
  totalPage: 1,
  currentPage: 1,
};
const MypageMyArticle = () => {
  const [page, setPage] = React.useState<number>(1);
  //TODO:: api 연결하면서 contentsType 변경
  const { currentTab } = useMypageArticleTabStore();

  const filteredData = data.contentsList.filter((article) => {
    if (currentTab === ContentsTypeEnum.all) {
      return article;
    } else {
      return article.contentsType === currentTab;
    }
  });

  return (
    <div className="flex flex-col gap-4 w-full h-full bg-layout_white px-4 py-6">
      <MypageTabs />
      <ListBasic type="header" />
      {filteredData.map((article) => (
        <ListBasic key={article.id} listData={article} type="data" />
      ))}
      <div className="flex justify-center py-4">
        <Pagination
          total={data?.totalPage || 0}
          initialPage={page}
          onChange={setPage}
          showControls
        />
      </div>
    </div>
  );
};

export default MypageMyArticle;
