import { create } from "zustand";

interface CommunityTabState {
  currentTab: CommunityTabs;
  setTab: (tab: CommunityTabs) => void;
}

export const useCommunityTabStore = create<CommunityTabState>((set) => ({
  currentTab: "all",
  setTab: (tab) => set({ currentTab: tab }),
}));
