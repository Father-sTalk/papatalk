import React from "react";

import { ICON } from "@/assets/icon";
import BtnCreateComment from "@/components/feature/button/btn_create_comment";

import TextareaBasic from "./textarea_basic";
interface Props {
  contentType: ContentsTypeEnum;
  contentId: number;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const TextareaComment: React.FC<Props> = ({
  contentType,
  contentId,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-3 py-2">
      <div className="flex flex-row gap-2">
        <ICON.chatAlt2 color="black" size={{ width: 24, height: 24 }} />
        <p className="text-h4">댓글</p>
      </div>
      <TextareaBasic value={value} onChange={onChange} rows={4} />
      <div className="flex flex-row justify-end">
        <BtnCreateComment
          contentsType={contentType}
          contentsId={contentId}
          content={value}
          setComment={onChange}
        />
      </div>
    </div>
  );
};

export default TextareaComment;
