type MenuKeys = "home" | "about" | "community" | "sos";
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
};

export const MenuGroup = {
  main: [MENU.about, MENU.community, MENU.sos],
  sub: [],
};
