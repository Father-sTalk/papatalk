import create from "zustand";

interface ModalState {
  Component: React.ReactNode;
  isOpen: boolean;
  openModal: (Component: React.ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  Component: null,
  isOpen: false,
  openModal: (Component) => set({ Component, isOpen: true }),
  closeModal: () => set({ Component: null, isOpen: false }),
}));
