import { create } from "zustand";

export type ModalType = "answer" | "null";

interface ModalStore {
  openModal: ModalType;
  open: (modalType: ModalType) => void;
  close: () => void;
}

export const modalStore = create<ModalStore>((set) => ({
  openModal: "null",
  open: (modalType: ModalType) => set({ openModal: modalType }),
  close: () => set({ openModal: "null" }),
}));
