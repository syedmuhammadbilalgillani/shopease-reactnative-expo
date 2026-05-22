import React from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';
import { useAuthStore } from '@/store/authStore';
import { useAppStore } from '@/store/appStore';

const items = [
  { label: 'Edit profile', path: '/profile/edit' },
  { label: 'My addresses', path: '/profile/addresses' },
  { label: 'Wishlist', path: '/wishlist' },
  { label: 'Payment methods', path: '/profile/payment-methods' },
  { label: 'Notifications', path: '/notifications' },
  { label: 'Help center', path: '/profile/help' },
  { label: 'Privacy policy', path: '/profile/privacy' },
  { label: 'Terms and conditions', path: '/profile/terms' },
  { label: 'Business admin demo', path: '/admin' }
];

export default function ProfileScreen() {
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const mode = useAppStore((state) => state.themeMode);
  const setThemeMode = useAppStore((state) => state.setThemeMode);
  return (
    <Screen>
      <Header title="Profile" subtitle="Account, orders, settings, and support" />
      <View style={[styles.profile, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.xl }]}>
        <Image source={{ uri: user?.avatar ?? 'https://i.pravatar.cc/200?img=12' }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={[styles.name, { color: theme.colors.text }]}>{user?.name ?? 'Guest User'}</Text>
          <Text style={[styles.email, { color: theme.colors.mutedText }]}>{user?.email ?? 'guest@shopease.dev'}</Text>
        </View>
      </View>
      <Button title={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} mode`} variant="secondary" onPress={() => setThemeMode(mode === 'dark' ? 'light' : 'dark')} />
      <View style={styles.menu}>{items.map((item) => <Pressable key={item.path} onPress={() => router.push(item.path)} style={[styles.menuItem, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.md }]}><Text style={[styles.menuText, { color: theme.colors.text }]}>{item.label}</Text><Text style={{ color: theme.colors.mutedText }}>›</Text></Pressable>)}</View>
      <Button title="Logout" variant="danger" onPress={() => { logout(); router.replace('/(auth)/login'); }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  profile: { borderWidth: 1, padding: 14, flexDirection: 'row', gap: 12, alignItems: 'center', marginBottom: 12 },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#E2E8F0' },
  info: { flex: 1 },
  name: { fontSize: 20, fontWeight: '900' },
  email: { fontSize: 13, marginTop: 3 },
  menu: { gap: 9, marginVertical: 14 },
  menuItem: { borderWidth: 1, padding: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  menuText: { fontSize: 15, fontWeight: '800' }
});
