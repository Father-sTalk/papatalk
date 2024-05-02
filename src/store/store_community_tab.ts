import { create } from "zustand";

import { CommunityTabsEnum } from "@/@types/enum/enums";

interface CommunityTabState {
  currentTab: CommunityTabsEnum;
  setTab: (tab: CommunityTabsEnum) => void;
}

export const useCommunityTabStore = create<CommunityTabState>((set) => ({
  currentTab: CommunityTabsEnum.all,
  setTab: (tab) => set({ currentTab: tab }),
}));
