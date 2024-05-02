"use client";
import React from "react";

import { Pagination } from "@nextui-org/react";

import { ICON } from "@/assets/icon";
import CardListTwoRows from "@/components/bootstrap/card_list/two/cardlist_two_rows";
import DropdownBasic from "@/components/bootstrap/dropdown/dropdown_basic";
import InputSearch from "@/components/bootstrap/input/input_search";
import BtnGoCreate from "@/components/feature/button/btn_go_create";
import SosImage from "@/components/pages/sos/sos_image";
// import SosTabs from "@/components/pages/sos/sos_tabs";
import { queryKey } from "@/constants/queryKey";
import useGetSosList from "@/models/hooks/sos/get_sosList.hooks";
import queryController from "@/utils/query/controller_query";

const SOSPage = () => {
  const [search, setSearch] = React.useState<string>("");
  const [searchValue, setSearchValue] = React.useState<string>("");

  const [sort, setSort] = React.useState<string>("최신 순");
  const [page, setPage] = React.useState<number>(1);

  const { data, isLoading } = useGetSosList({ page, search, sort });

  const onEnter = () => {
    queryController.invalidateQueries(queryKey.SOS_LIST);
    setPage(1);
    setSearch(searchValue);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="w-full flex flex-col gap-8">
      <SosImage
        title="육아에 대해 먼저 경험해본 현역 파파야들의 빠른 조언"
        content="걱정이 많은 예비파파야들을 위한 공간!"
        imgSrc="/img/sos/sos_image.png"
      />
      <div className="flex flex-col gap-4 px-6">
        <div>
          <div className="flex flex-row justify-between pb-2">
            <div className="flex flex-row items-center gap-2">
              <ICON.speaker color="black" />
              <p className="text-h4">SOS 글</p>
            </div>
            <BtnGoCreate color="secondary" />
          </div>
          <div className="flex flex-row justify-between items-center">
            <InputSearch
              value={searchValue}
              setValue={setSearchValue}
              onEnter={onEnter}
            />
            <DropdownBasic
              list={["최신 순", "답변 많은 순", "추천 많은 순"]}
              selected={sort}
              setSelected={setSort}
              size="sm"
            />
          </div>
        </div>
        {/* <SosTabs /> */}
        <CardListTwoRows cardList={data?.sosList} />
        <div className="flex justify-center py-4">
          <Pagination
            total={data?.totalPage || 0}
            initialPage={page}
            onChange={setPage}
            color="secondary"
            showControls
          />
        </div>
      </div>
    </section>
  );
};

export default SOSPage;
