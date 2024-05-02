"use client";
import React from "react";

import { MypageSideMenuEnum } from "@/@types/enum/enums";
import MypageBabyInfo from "@/components/pages/mypage/mypage_baby_info";
import MypageMyArticle from "@/components/pages/mypage/mypage_my_article";
import MypageOtherArticle from "@/components/pages/mypage/mypage_other_article";
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
      return <MypageOtherArticle />;
    }
  }
  if (currentTab === MypageSideMenuEnum.baby) {
    return <MypageBabyInfo />;
  }
};

export default Mypage;
