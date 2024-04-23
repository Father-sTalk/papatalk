"use client";
import React from "react";

import { MypageSideMenuEnum } from "@/@types/enum/enums";
import MypageMyArticle from "@/components/pages/mypage/mypage_my_article";
import MypageProfile from "@/components/pages/mypage/mypage_profile";
import { useMypageSideStore } from "@/store/store_mypage_side";

const Mypage = () => {
  const { currentTab, currentSubMenu, setSubMenu } = useMypageSideStore();
  React.useEffect(() => {
    return () => {
      setSubMenu(MypageSideMenuEnum.profile, undefined);
    };
  }, [setSubMenu]);

  if (currentTab === MypageSideMenuEnum.profile) {
    return <MypageProfile />;
  }
  if (currentTab === MypageSideMenuEnum.article) {
    if (currentSubMenu === MypageSideMenuEnum.myarticle) {
      return <MypageMyArticle />;
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
