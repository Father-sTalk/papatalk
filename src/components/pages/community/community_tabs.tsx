import React from "react";

import { BtnBasic } from "@/components/bootstrap/button/btn_basic";
import { communityTabs } from "@/constants/menu";
import { useCommunityTabStore } from "@/store/store_community_tab";

const CommunityTabs: React.FC = () => {
  const { currentTab, setTab } = useCommunityTabStore();

  return (
    <div className="flex gap-2">
      {communityTabs.map((tab) => (
        <BtnBasic
          key={tab.value}
          role="tab"
          size="sm"
          variant={currentTab === tab.value ? "solid" : "bordered"}
          bordered={currentTab !== tab.value ? "default" : undefined}
          color={currentTab === tab.value ? "primary" : "default"}
          onClick={() => setTab(tab.value)}
        >
          {tab.text}
        </BtnBasic>
      ))}
    </div>
  );
};

export default CommunityTabs;
