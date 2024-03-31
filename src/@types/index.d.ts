/* eslint-disable @typescript-eslint/no-unused-vars */

interface Window {}
interface MenuItem {
  name: string;
  path: string;
  icon: string;
}
type CommunityTabs = "all" | "free";
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
}
