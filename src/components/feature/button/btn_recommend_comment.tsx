import React from "react";

import { ICON } from "@/assets/icon";
import useCommentRecommendMutation from "@/models/hooks/comment/post_comment_recommend.hooks";

interface Props {
  isRecommend: boolean;
  contentsType: ContentsType;
  contentsId: number;
  commentId: number;
}
const BtnRecommendComment: React.FC<Props> = ({
  isRecommend,
  contentsType,
  contentsId,
  commentId,
}) => {
  const textColor = isRecommend ? "text-primary-500" : "text-gray-500";

  const { mutate } = useCommentRecommendMutation();
  const onClick = () => {
    mutate({ contentsType, contentsId, commentId });
  };
  return (
    <div
      role="button"
      className="flex flex-row items-center gap-2"
      onClick={onClick}
    >
      <ICON.thumb up={isRecommend} />
      <span className={`text-button ${textColor}`}>추천</span>
    </div>
  );
};

export default BtnRecommendComment;
