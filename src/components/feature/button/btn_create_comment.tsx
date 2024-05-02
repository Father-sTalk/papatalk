import React from "react";

import { BtnBasic } from "@/components/bootstrap/button/btn_basic";
import useCreateCommentMutation from "@/models/hooks/comment/post_comment.hooks";

interface Props {
  contentsType: ContentsTypeEnum;
  contentsId: number;
  content: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
}
const BtnCreateComment: React.FC<Props> = ({
  contentsType,
  contentsId,
  content,
  setComment,
}) => {
  const { mutate } = useCreateCommentMutation();
  const onClick = () => {
    mutate({ contentsType, contentsId, content });
    setComment("");
  };
  return (
    <BtnBasic
      size="md"
      color="primary"
      className="w-[9.375rem]"
      onClick={onClick}
    >
      등록하기
    </BtnBasic>
  );
};

export default BtnCreateComment;
