"use client";
import React from "react";

import Image from "next/image";

import useGetCommunityArticle from "@/models/hooks/community/get_communityArticle.hooks";
interface Props {
  params: { id: string };
}

const CommunityDetailPage: React.FC<Props> = ({ params }) => {
  const articleId = params.id;
  const { data, isLoading } = useGetCommunityArticle({ id: articleId });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <article>
      {data?.images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="article image"
          width={500}
          height={500}
        />
      ))}
      <p>{data?.title}</p>
      <pre>{data?.content}</pre>
    </article>
  );
};

export default CommunityDetailPage;
