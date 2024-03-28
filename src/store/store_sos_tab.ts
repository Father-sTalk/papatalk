import { create } from "zustand";

interface SosTabState {
  currentTab: SosTabs;
  setTab: (tab: SosTabs) => void;
}

export const useSosTabStore = create<SosTabState>((set) => ({
  currentTab: "all",
  setTab: (tab) => set({ currentTab: tab }),
}));
