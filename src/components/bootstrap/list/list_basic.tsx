import React from "react";

import { useRouter } from "next/navigation";
interface Props {
  listData?: {
    id: number;
    title: string;
    authorNickname: string;
    views: number;
    likes: number;
    createdAt: string;
  };
  type: "header" | "data";
}
const ListBasic: React.FC<Props> = ({ listData, type }) => {
  const router = useRouter();
  const date = new Date(listData?.createdAt || "");
  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  const onClickHandler = () => {
    router.push(`/community/${listData?.id}`);
  };

  if (type === "header") {
    return (
      <div className="grid grid-cols-list h-[2.25rem] items-center text-p">
        <div>글 제목</div>
        <div>글쓴이</div>
        <div>조회 수</div>
        <div>공감 수</div>
        <div>작성일</div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-list h-[2.25rem] items-center border-b-1 border-default-300 text-table">
      <div role="button" onClick={onClickHandler}>
        {listData?.title}
      </div>
      <div>{listData?.authorNickname}</div>
      <div>{listData?.views}</div>
      <div>{listData?.likes}</div>
      <div>{formattedDate}</div>
    </div>
  );
};

export default ListBasic;
