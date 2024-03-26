"use client";
import React from "react";

import { ICON } from "@/assets/icon";
import CardListPopular from "@/components/bootstrap/card_list/one/cardlist_one_popular";
import ListBasic from "@/components/bootstrap/list/list_basic";
import CommunityTabs from "@/components/pages/community/community_tabs";
import useGetCommunityList from "@/models/hooks/community/get_categoryList.hooks";

const CommunityPage = () => {
  const { data, isLoading } = useGetCommunityList({ page: 1 });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="flex flex-col gap-8 p-6">
      <CardListPopular cardList={data?.communityList} rank={4} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <ICON.message color="black" />
          <p className="text-h4">커뮤니티 모든 글</p>
        </div>
        <CommunityTabs />
      </div>
      <div>
        <ListBasic type="header" />
        {data?.communityList.map((article) => (
          <ListBasic key={article.id} listData={article} type="data" />
        ))}
      </div>
    </section>
  );
};

export default CommunityPage;
