/* eslint-disable @typescript-eslint/no-unused-vars */

interface Window {}
interface MenuItem {
  name: string;
  path: string;
  icon: string;
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
type CommunityTabs = "all" | "free" | "pregnancy" | "childcare";
type SosTabs = "all" | "wait" | "solved";
type ContentsType = "community" | "sos";
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
}
