import React from 'react';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@/hooks/useTheme';

const queryClient = new QueryClient();

export default function RootLayout() {
  const theme = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style={theme.colors.mode === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.background } }} />
    </QueryClientProvider>
  );
}
