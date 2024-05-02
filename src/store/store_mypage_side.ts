import { create } from "zustand";

import { MypageSideMenuEnum } from "@/@types/enum/enums";

interface MypageSideState {
  currentTab: MypageSideMenuEnum;
  currentSubMenu?: MypageSideMenuEnum;
  setMenu: (tab: MypageSideMenuEnum | undefined) => void;
  setSubMenu: (
    tab: MypageSideMenuEnum | undefined,
    subTab: MypageSideMenuEnum | undefined,
  ) => void;
}

export const useMypageSideStore = create<MypageSideState>((set) => ({
  currentTab: MypageSideMenuEnum.profile,
  currentSubMenu: undefined,
  setMenu: (tab) => {
    if (tab === MypageSideMenuEnum.article) {
      set({ currentTab: tab, currentSubMenu: MypageSideMenuEnum.myarticle });
      return;
    }
    set({ currentTab: tab, currentSubMenu: undefined });
  },
  setSubMenu: (tab, subTab) => set({ currentTab: tab, currentSubMenu: subTab }),
}));
