"use client";
import React from "react";

import Label from "@/components/bootstrap/button/labelButton";
import Input from "@/components/bootstrap/input/input";

export default function Home() {
  const [state, setState] = React.useState<string>("");
  return (
    <div className="w-w-smallBox h-h-header">
      <Label
        text="클릭zzzzzzzz"
        size="mid"
        bgColorClass="bg-fg-focus"
        textColorClass="text-white"
      />
      <Input
        type="text"
        placeholder="플레이스홀더"
        value={state}
        setValue={setState}
      />
    </div>
  );
}
