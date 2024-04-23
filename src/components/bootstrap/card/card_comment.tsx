import React from "react";

import { Avatar } from "@nextui-org/react";

import BtnRecommendComment from "@/components/feature/button/btn_recommend_comment";
import { dateToString } from "@/utils/formatter/dateToString";
interface Props {
  contentsType: ContentsTypeEnum;
  contentsId: number;
  comment: CommentItem;
}
const CardComment: React.FC<Props> = ({
  contentsType,
  contentsId,
  comment,
}) => {
  const date = dateToString(comment.createdAt);
  return (
    <div className="border border-layout_divider p-4 rounded-lg bg-layout_white">
      <div className="w-full flex flex-row justify-between items-start h-9">
        <div className="flex flex-row items-center gap-2">
          {/* TODO::이미지 URL 서버에서 받아야함. */}
          <Avatar src="" alt="profile_image" size="sm" />
          <p className="text-body2 text-layout_black">
            {comment.authorNickname}
          </p>
        </div>
        <span className="text-caption text-default-500">{date}</span>
      </div>
      <p>{comment.content}</p>
      <div className="flex flex-row justify-end">
        <BtnRecommendComment
          isRecommend={comment.liked}
          contentsType={contentsType}
          contentsId={contentsId}
          commentId={comment.id}
        />
      </div>
    </div>
  );
};

export default CardComment;
