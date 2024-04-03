"use client";
import React from "react";

import { Pagination } from "@nextui-org/react";

import { ICON } from "@/assets/icon";
import CardListPopular from "@/components/bootstrap/card_list/one/cardlist_one_popular";
import DropdownBasic from "@/components/bootstrap/dropdown/dropdown_basic";
import InputSearch from "@/components/bootstrap/input/input_search";
import ListBasic from "@/components/bootstrap/list/list_basic";
import BtnGoCreate from "@/components/feature/button/btn_go_create";
import CommunityTabs from "@/components/pages/community/community_tabs";
import { queryKey } from "@/constants/queryKey";
import useGetCommunityList from "@/models/hooks/community/get_communityList.hooks";
import useGetPopularCommunityList from "@/models/hooks/community/get_popularCategoryList.hooks";
import { useCommunityTabStore } from "@/store/store_community_tab";
import queryController from "@/utils/query/controller_query";

const CommunityPage = () => {
  const [search, setSearch] = React.useState<string>("");
  const [searchValue, setSearchValue] = React.useState<string>("");

  const [sort, setSort] = React.useState<string>("최신 순");
  const [page, setPage] = React.useState<number>(1);

  const { currentTab } = useCommunityTabStore();

  const { data: popularData, isLoading: popularIsLoading } =
    useGetPopularCommunityList({});
  const { data, isLoading } = useGetCommunityList({
    page,
    search,
    sort: currentTab,
  });
  const onEnter = () => {
    queryController.invalidateQueries(queryKey.COMMUNITY_LIST);
    setPage(1);
    setSearch(searchValue);
  };
  if (isLoading || popularIsLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="flex flex-col gap-8 p-6">
      <CardListPopular cardList={popularData?.communityList} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-2">
            <ICON.message color="black" />
            <p className="text-h4">커뮤니티 모든 글</p>
          </div>
          <BtnGoCreate />
        </div>
        <div className="flex flex-row justify-between">
          <CommunityTabs />
          <div className="flex flex-row items-center gap-2.5">
            <InputSearch
              value={searchValue}
              setValue={setSearchValue}
              onEnter={onEnter}
            />
            <DropdownBasic
              list={["최신 순", "추천 순"]}
              selected={sort}
              setSelected={setSort}
              size="sm"
            />
          </div>
        </div>
      </div>
      <div>
        <ListBasic type="header" />
        {data?.communityList.map((article) => (
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
    </section>
  );
};

export default CommunityPage;
