"use client";
import React from "react";

import useGetCommentList from "@/models/hooks/comment/get_commentList.hooks";

import CardComment from "../../card/card_comment";
import TextareaComment from "../../textarea/textarea_comment";

const CardlistComment: React.FC<
  ApiRequest.CommentApiTypes.GetCommentListRequest
> = ({ contentsType, contentsId }) => {
  const [commentValue, setCommentValue] = React.useState<string>("");

  const { data } = useGetCommentList({ contentsType, contentsId });
  return (
    <article className="flex flex-col gap-4">
      <TextareaComment
        value={commentValue}
        onChange={setCommentValue}
        contentType={contentsType}
        contentId={contentsId}
      />
      <div className="flex flex-col gap-2">
        {data?.commentList?.map((comment) => (
          <CardComment
            key={comment.id}
            contentsType={contentsType}
            contentsId={contentsId}
            comment={comment}
          />
        ))}
      </div>
    </article>
  );
};

export default CardlistComment;
