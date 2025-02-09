import { create } from 'zustand';

export const useStore = create((set) => ({
  isLogged: false,
  toggleLogin: () => set((state) => ({ isLogged: !state.isLogged })),
}));
