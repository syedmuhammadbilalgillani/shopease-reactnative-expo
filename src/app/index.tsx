import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout/Screen';
import { useAppStore } from '@/store/appStore';
import { useAuthStore } from '@/store/authStore';
import { useTheme } from '@/hooks/useTheme';

export default function IndexScreen() {
  const theme = useTheme();
  const onboardingCompleted = useAppStore((state) => state.onboardingCompleted);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    const next = onboardingCompleted ? (isAuthenticated ? '/(tabs)' : '/(auth)/login') : '/onboarding';
    const timer = setTimeout(() => router.replace(next), 100);
    return () => clearTimeout(timer);
  }, [onboardingCompleted, isAuthenticated]);

  return <Screen scroll={false} contentStyle={{ alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: theme.colors.text, fontSize: 24, fontWeight: '900' }}>ShopEase</Text></Screen>;
}
