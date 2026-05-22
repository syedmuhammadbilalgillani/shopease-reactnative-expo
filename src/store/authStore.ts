import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '@/types';
import { authService } from '@/services/authService';

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (payload: Pick<User, 'name' | 'email' | 'phone'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  updateProfile: (payload: Partial<User>) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        const user = await authService.login(email, password);
        if (!user) return false;
        set({ user, isAuthenticated: true });
        return true;
      },
      register: async (payload) => {
        const user = await authService.register(payload);
        set({ user, isAuthenticated: true });
        return true;
      },
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (payload) => set((state) => ({ user: state.user ? { ...state.user, ...payload } : state.user }))
    }),
    { name: 'shopease-auth', storage: createJSONStorage(() => AsyncStorage) }
  )
);
