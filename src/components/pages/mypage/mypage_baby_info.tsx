import React from "react";

import CardChildInfo from "@/components/modal/card_write_child_info";

const MypageBabyInfo = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-11 bg-layout_white rounded-2xl">
          <CardChildInfo mode="change" />
        </div>
        <div className="p-11 bg-layout_white rounded-2xl"></div>
      </div>
      <div className="p-11 bg-layout_white rounded-2xl">zzz</div>
    </div>
  );
};

export default MypageBabyInfo;
