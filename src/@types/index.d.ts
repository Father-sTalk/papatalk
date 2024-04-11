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

namespace Enums {
  enum ConfirmType {
    Agree = true,
    Disagree = false,
  }
  enum ButtonType {
    default = "default",
    hover = "hover",
    disabled = "disabled",
  }
  enum CommunityTabs {
    all = "all",
    free = "free",
    pregnancy = "pregnancy",
    childcare = "childcare",
  }
  enum MypageSideMenu {
    profile = "profile",
    article = "article",
    baby = "baby",
  }
  enum ContentsType {
    community = "community",
    sos = "sos",
  }
}
type CommunityTabs = Enums.CommunityTabs;
type MypageSideMenu = Enums.MypageSideMenu;
type ContentsType = Enums.ContentsType;
