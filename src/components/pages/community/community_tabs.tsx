import React from "react";

import { BtnBasic } from "@/components/bootstrap/button/btn_basic";
import { useCommunityTabStore } from "@/store/store_community_tab";
interface Tab {
  text: string;
  value: CommunityTabs;
}
const tabs: Tab[] = [
  { text: "전체", value: "all" },
  { text: "자유게시판", value: "free" },
];

const CommunityTabs: React.FC = () => {
  const { currentTab, setTab } = useCommunityTabStore();

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <BtnBasic
          key={tab.value}
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
