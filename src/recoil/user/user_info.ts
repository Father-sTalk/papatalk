import { atom } from "recoil";
interface UserInfo {
  email: string;
  profileImage: string;
}
export const userInfo = atom<UserInfo>({
  key: "userInfo",
  default: {
    email: "",
    profileImage: "",
  },
});
