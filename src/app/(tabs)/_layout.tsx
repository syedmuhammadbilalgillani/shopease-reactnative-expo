import React from 'react';
import { Tabs } from 'expo-router';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

const icons: Record<string, string> = { index: '🏠', categories: '🧭', cart: '🛒', orders: '📦', profile: '👤' };

export default function TabsLayout() {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.mutedText,
        tabBarStyle: { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.border, height: 64, paddingBottom: 8, paddingTop: 8 },
        tabBarIcon: ({ color }) => <Text style={[styles.icon, { color }]}>{icons[route.name] ?? '•'}</Text>
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="categories" options={{ title: 'Categories' }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
      <Tabs.Screen name="orders" options={{ title: 'Orders' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({ icon: { fontSize: 20 } });
