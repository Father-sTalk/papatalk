"use client";
import React from "react";

import { MypageSideMenuEnum } from "@/@types/enum/enums";
import { useMypageSideStore } from "@/store/store_mypage_side";

const Mypage = () => {
  const { currentTab, currentSubMenu, setSubMenu } = useMypageSideStore();
  React.useEffect(() => {
    return () => {
      setSubMenu(MypageSideMenuEnum.profile, undefined);
    };
  }, [setSubMenu]);

  if (currentTab === MypageSideMenuEnum.profile) {
    return <div>Profile</div>;
  }
  if (currentTab === MypageSideMenuEnum.article) {
    if (currentSubMenu === MypageSideMenuEnum.myarticle) {
      return <div>My Article</div>;
    }
    if (currentSubMenu === MypageSideMenuEnum.otherarticle) {
      return <div>Other Article</div>;
    }
  }
  if (currentTab === MypageSideMenuEnum.baby) {
    return <div>Baby</div>;
  }
};

export default Mypage;
