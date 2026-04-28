import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface MenuState {
  isActive: string;
  setActive: (active: string) => void;
}

export const useMenuStore = create<MenuState>()(
  devtools((set) => ({
    isActive: 'task', 
    setActive: (active) => set({ isActive: active }, false, 'setActive'),
  }), { name: 'MenuStore' })
);