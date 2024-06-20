import React from "react";

import CardChildInfo from "@/components/modal/card_write_child_info";

import MypageBabyGrowthGraph from "./mypage_baby_growth_graph";

const data: ApiResponse.UsersApiTypes.BabyTypes.BabyInfoResponse = [
  {
    month: 1,
    height: 67.5,
    weight: 2.8,
  },
  {
    month: 2,
    height: 70.1,
    weight: 4.1,
  },
  {
    month: 3,
    height: 72.7,
    weight: 5.5,
  },
  {
    month: 4,
    height: 75.3,
    weight: 6.8,
  },
  {
    month: 5,
    height: 77.9,
    weight: 7.9,
  },
  {
    month: 6,
    height: 80.5,
    weight: 8.9,
  },
  {
    month: 7,
    height: 83.1,
    weight: 9.8,
  },
  {
    month: 8,
    height: 85.7,
    weight: 10.6,
  },
  {
    month: 9,
    height: 88.3,
    weight: 11.4,
  },
  {
    month: 10,
    height: 90.9,
    weight: 12.1,
  },
  {
    month: 11,
    height: 93.5,
    weight: 12.8,
  },
  {
    month: 12,
    height: 96.1,
    weight: 13.5,
  },
];

const babyGrowth = {
  range: data?.length + 1,
  height: data?.[data?.length - 1].height - data?.[0].height,
  weight: data?.[data?.length - 1].weight - data?.[0].weight,
};

const MypageBabyInfo = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="p-11 bg-layout_white rounded-2xl">
        <CardChildInfo mode="change" />
      </div>
      <div className="p-11 bg-layout_white rounded-2xl">
        <div className="w-full h-80">
          <MypageBabyGrowthGraph data={data} />
        </div>
        <div className="px-10 py-4 bg-primary-50 rounded-2xl text-table">
          {babyGrowth.range}개월 동안 키 {babyGrowth.height.toFixed(1)}cm,
          몸무게 {babyGrowth.weight.toFixed(1)}kg 증가했어요! 🎉
        </div>
      </div>
    </div>
  );
};

export default MypageBabyInfo;
