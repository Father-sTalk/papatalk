import { create } from "zustand";

interface SosTabState {
  currentTab: SosTabsEnum;
  setTab: (tab: SosTabsEnum) => void;
}

export const useSosTabStore = create<SosTabState>((set) => ({
  currentTab: SosTabsEnum.all,
  setTab: (tab) => set({ currentTab: tab }),
}));
