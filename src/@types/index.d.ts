/* eslint-disable @typescript-eslint/no-unused-vars */

interface Window {}
interface MenuItem {
  name: string;
  path: string;
  icon: string;
}
namespace Enums {
  enum ConfirmType {
    Agree = 1,
    Disagree = 0,
  }
  enum ButtonType {
    default = "default",
    hover = "hover",
    disabled = "disabled",
  }
}
