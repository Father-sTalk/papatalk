type MenuKeys = "home" | "about" | "community" | "sos" | "login" | "register";
type MenuList = Record<MenuKeys, MenuItem>;

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
};

export const MenuGroup = {
  main: [MENU.about, MENU.community, MENU.sos],
  sub: [],
};
