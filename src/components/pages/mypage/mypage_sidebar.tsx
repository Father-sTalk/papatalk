"use client";
import React from "react";

import SideMenuDefault from "@/components/bootstrap/menu/sidemenu_default";
import { mypageSide } from "@/constants/menu";
import { useMypageSideStore } from "@/store/store_mypage_side";

const MypageSidebar = () => {
  const { currentTab, setMenu } = useMypageSideStore();
  return (
    <div className="w-sidebar min-h-body flex flex-col gap-2 bg-default-50 p-6">
      {mypageSide.map((tab) => {
        const isActive = tab.value === currentTab;
        return (
          <SideMenuDefault
            key={tab.value}
            text={tab.text}
            selected={isActive}
            onClick={() => setMenu(tab.value)}
            subMenu={tab?.subMenu}
          />
        );
      })}
    </div>
  );
};

export default MypageSidebar;
