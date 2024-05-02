import React from "react";

import { BtnBasic } from "@/components/bootstrap/button/btn_basic";
import { mypageArticleTabs } from "@/constants/menu";
import { useMypageArticleTabStore } from "@/store/store_mypage_article_tab";

const MypageTabs: React.FC = () => {
  const { currentTab, setTab } = useMypageArticleTabStore();

  return (
    <div className="flex gap-2">
      {mypageArticleTabs.map((tab) => (
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

export default MypageTabs;
