type MenuKeys = "home" | "about" | "contact";
type MenuList = Record<MenuKeys, MenuItem>;

export const MENU: MenuList = {
  home: {
    name: "Home",
    path: "/",
    icon: "",
  },
  about: {
    name: "About",
    path: "/about",
    icon: "",
  },
  contact: {
    name: "Contact",
    path: "/contact",
    icon: "",
  },
};

export const HeaderMenu = [MENU.home, MENU.about, MENU.contact];
export const SideMenu = { main: [MENU.home], sub: [MENU.about, MENU.contact] };
