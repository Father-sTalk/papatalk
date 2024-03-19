import { create } from "zustand";

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  nickname: string | null;
  profileImage: string | null;
  initialize: () => void;
  login: (
    accessToken: string,
    refreshToken: string,
    nickname: string,
    profileImage: string,
  ) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  accessToken: null,
  refreshToken: null,
  nickname: null,
  profileImage: null,
  initialize: () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const nickname = localStorage.getItem("nickname");
    const profileImage = localStorage.getItem("profileImage");
    set({ accessToken, refreshToken, nickname, profileImage });
  },
  login: (accessToken, refreshToken, nickname, profileImage) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("profileImage", profileImage);
    set({ accessToken, refreshToken, nickname, profileImage });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("nickname");
    localStorage.removeItem("profileImage");
    set({
      accessToken: null,
      refreshToken: null,
      nickname: null,
      profileImage: null,
    });
  },
}));

export default useUserStore;
