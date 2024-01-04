import { create } from "zustand";


export const useModal = create((set) => ({
    data: {},
    isOpen: {
      login: false,
      register: false,
    },
    onLogin: () => set((state) => ({ isOpen: { ...state.isOpen, login: true } })),
    onRegister: () => set((state) => ({ isOpen: { ...state.isOpen, register: true } })),
    onLoginClose: () => set((state) => ({ isOpen: { ...state.isOpen, login: false} })),
    onRegisterClose: () => set((state) => ({ isOpen: { ...state.isOpen, register: false} })),
  }));