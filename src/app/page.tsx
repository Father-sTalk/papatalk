"use client";
import React from "react";

import Check from "@/assets/icon/check";

export default function Home() {
  const [slected, setSlected] = React.useState(false);
  const onClickHandler = () => {
    setSlected(!slected);
  };
  return (
    <div className="w-w-smallBox h-h-header bg-fg-focus">
      <Check selected={slected} />
      <button onClick={onClickHandler}>클릭</button>
    </div>
  );
}
