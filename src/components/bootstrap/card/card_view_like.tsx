import React from "react";

import BtnLike from "../button/btn_empathy";
import BtnIcon from "../button/btn_icon";
interface Props {
  views?: number;
  likes?: number;
  liked?: boolean;
  onClickView?: () => void;
  onClickLike?: () => void;
}
const CardViewLike: React.FC<Props> = ({
  views = 0,
  likes = 0,
  liked = false,
  onClickView,
  onClickLike,
}) => {
  return (
    <div role="button" className="flex gap-sm">
      <BtnIcon icon="eye" text={views.toString()} onClick={onClickView} />
      <BtnLike count={likes} liked={liked} onClick={onClickLike} />
    </div>
  );
};

export default CardViewLike;
