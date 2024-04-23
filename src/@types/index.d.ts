/* eslint-disable @typescript-eslint/no-unused-vars */

interface Window {}
interface MenuItem {
  name: string;
  path: string;
  icon: string;
}
type MenuKeys =
  | "home"
  | "about"
  | "community"
  | "sos"
  | "login"
  | "register"
  | "mypage";
type MenuList = Record<MenuKeys, MenuItem>;
interface Tab {
  text: string;
}
interface CommunityTab extends Tab {
  value: CommunityTabsEnum;
}
interface MypageSubTab extends Tab {
  value: MypageSideMenuEnum;
  subMenu: MypageSideMenuEnum;
}
interface MypageTab extends Tab {
  value?: MypageSideMenuEnum;
  subMenu?: MypageSubTab[];
}
type NextuiColor =
  | "none"
  | "primary"
  | "secondary"
  | "default"
  | "success"
  | "warning"
  | "danger"
  | undefined;
