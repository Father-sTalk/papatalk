import {
  CommunityTabsEnum,
  ContentsTypeEnum,
  MypageSideMenuEnum,
} from "@/@types/enum/enums";

export const MENU: MenuList = {
  home: {
    name: "아빠들만의 속 이야기",
    path: "/",
    icon: "",
  },
  about: {
    name: "소개",
    path: "/about",
    icon: "",
  },
  community: {
    name: "커뮤니티",
    path: "/community",
    icon: "",
  },
  sos: {
    name: "SOS",
    path: "/sos",
    icon: "",
  },
  login: {
    name: "로그인",
    path: "/login",
    icon: "",
  },
  register: {
    name: "가입",
    path: "/register",
    icon: "",
  },
  mypage: {
    name: "마이페이지",
    path: "/mypage",
    icon: "",
  },
};
export const profileMenu: (MypageTab | MypageSubTab)[] = [
  { text: "프로필 관리", value: MypageSideMenuEnum.profile },
  {
    text: "내가 작성한 글",
    value: MypageSideMenuEnum.article,
    subMenu: MypageSideMenuEnum.myarticle,
  },
  {
    text: "내가 답변한 글",
    value: MypageSideMenuEnum.article,
    subMenu: MypageSideMenuEnum.otherarticle,
  },
  { text: "나의 아기", value: MypageSideMenuEnum.baby },
];
export const menuGroup = {
  main: [MENU.about, MENU.community, MENU.sos],
  sub: [],
};

export const communityTabs: CommunityTab[] = [
  { text: "전체", value: CommunityTabsEnum.all },
  { text: "자유게시판", value: CommunityTabsEnum.free },
  { text: "임신", value: CommunityTabsEnum.pregnancy },
  { text: "육아", value: CommunityTabsEnum.childcare },
];

export const mypageArticleTabs: MypageArticleTab[] = [
  { text: "전체", value: ContentsTypeEnum.all },
  { text: "커뮤니티", value: ContentsTypeEnum.community },
  { text: "SOS", value: ContentsTypeEnum.sos },
];

export const mypageSide: MypageTab[] = [
  { text: "프로필 관리", value: MypageSideMenuEnum.profile },
  {
    text: "글 관리",
    value: MypageSideMenuEnum.article,
    subMenu: [
      {
        text: "내가 작성한 글",
        value: MypageSideMenuEnum.article,
        subMenu: MypageSideMenuEnum.myarticle,
      },
      {
        text: "내가 답변한 글",
        value: MypageSideMenuEnum.article,
        subMenu: MypageSideMenuEnum.otherarticle,
      },
    ],
  },
  { text: "나의 아기", value: MypageSideMenuEnum.baby },
];
