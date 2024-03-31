"use client";

import React from "react";

import Image from "next/image";

import CardViewLike from "@/components/bootstrap/card/card_view_like";
import useGetCommunityArticle from "@/models/hooks/community/get_communityArticle.hooks";
import { dateToString } from "@/utils/formatter/dateToString";
interface Props {
  id: string;
}
const CommunityDetail: React.FC<Props> = ({ id }) => {
  const { data, isLoading } = useGetCommunityArticle({ id });
  const date = data?.createdAt && dateToString(data?.createdAt);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data?.images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="article image"
          width={500}
          height={500}
        />
      ))}
      <div className="flex flex-col gap-10 py-4">
        <div className="flex flex-row justify-between">
          <p>{data?.title}</p>
          <CardViewLike
            views={data?.views || 0}
            likes={data?.likes || 0}
            liked={data?.liked}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>{data?.authorNickname}</span>
          <div className="flex flex-row gap-2">
            <span>{date}</span>
            <span className="px-3 py-0.5 bg-primary-50 rounded-full text-button text-primary-500">
              {data?.category}
            </span>
          </div>
        </div>
      </div>
      <pre>{data?.content}</pre>
    </div>
  );
};

export default CommunityDetail;
