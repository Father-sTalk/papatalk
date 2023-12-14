"use client";
import React from "react";

import ChatIcon from "@/assets/icon/chat";
import CheckIcon from "@/assets/icon/check";
import SortIcon from "@/assets/icon/sort";
import CheckBoxIcon from "@/assets/icon/checkBox";
import RadioSelectIcon from "@/assets/icon/radioSelect";
import LogoutIcon from "@/assets/icon/logout";
import ThumbsUpIcon from "@/assets/icon/thumbsup";

export default function Home() {
  const [selected, setSlected] = React.useState(false);
  const onClickHandler = () => {
    setSlected(!selected);
  };
  return (
    <div className="w-w-smallBox h-h-header bg-fg-focus">
      <LogoutIcon />
      <SortIcon sort={selected ? "asc" : "desc"} />
      <ChatIcon selected={selected} />
      <CheckIcon selected={selected} />
      <CheckBoxIcon checked={selected} size={{ width: 200, height: 200 }} />
      <RadioSelectIcon checked={selected} size={{ width: 30, height: 30 }} />
      <ThumbsUpIcon up={selected} />
      <button onClick={onClickHandler}>클릭</button>
    </div>
  );
}
