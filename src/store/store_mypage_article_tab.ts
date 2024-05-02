import { create } from "zustand";

import { ContentsTypeEnum } from "@/@types/enum/enums";

interface MypageArticleTabState {
  currentTab: ContentsTypeEnum;
  setTab: (tab: ContentsTypeEnum) => void;
}

export const useMypageArticleTabStore = create<MypageArticleTabState>(
  (set) => ({
    currentTab: ContentsTypeEnum.all,
    setTab: (tab) => set({ currentTab: tab }),
  }),
);
