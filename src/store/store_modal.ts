import create from "zustand";

interface ModalState {
  Component: React.ReactNode;
  openModal: (Component: React.ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  Component: null,
  openModal: (Component) => set({ Component }),
  closeModal: () => set({ Component: null }),
}));
