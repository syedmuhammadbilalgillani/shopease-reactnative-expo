import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { notifications as initialNotifications } from '@/data/notifications';
import { Notification } from '@/types';
import { ThemeMode } from '@/theme';

export type AppState = {
  onboardingCompleted: boolean;
  themeMode: ThemeMode;
  recentSearches: string[];
  notifications: Notification[];
  completeOnboarding: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  addRecentSearch: (query: string) => void;
  markNotificationRead: (id: string) => void;
  deleteNotification: (id: string) => void;
};

const systemMode = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      onboardingCompleted: false,
      themeMode: systemMode,
      recentSearches: [],
      notifications: initialNotifications,
      completeOnboarding: () => set({ onboardingCompleted: true }),
      setThemeMode: (themeMode) => set({ themeMode }),
      addRecentSearch: (query) => set((state) => {
        const value = query.trim();
        if (!value) return state;
        return { recentSearches: [value, ...state.recentSearches.filter((item) => item.toLowerCase() !== value.toLowerCase())].slice(0, 8) };
      }),
      markNotificationRead: (id) => set((state) => ({ notifications: state.notifications.map((item) => item.id === id ? { ...item, read: true } : item) })),
      deleteNotification: (id) => set((state) => ({ notifications: state.notifications.filter((item) => item.id !== id) }))
    }),
    { name: 'shopease-app', storage: createJSONStorage(() => AsyncStorage) }
  )
);
