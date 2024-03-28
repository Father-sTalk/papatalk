"use client";
import React from "react";

import CardListTwoRows from "@/components/bootstrap/card_list/two/cardlist_two_rows";
import SosImage from "@/components/pages/sos/sos_image";
import SosTabs from "@/components/pages/sos/sos_tabs";
import useGetSosList from "@/models/hooks/sos/get_sosList.hooks";

const SOSPage = () => {
  const { data, isLoading } = useGetSosList({ page: 1 });
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
        <SosTabs />
        <CardListTwoRows cardList={data?.sosList} />
      </div>
    </section>
  );
};

export default SOSPage;
