import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { useTheme } from '@/hooks/useTheme';

export default function PrivacyScreen() {
  const theme = useTheme();
  return <Screen><Header title="Privacy policy" showBack /><Text style={[styles.body, { color: theme.colors.mutedText }]}>ShopEase stores mock user session, cart, wishlist, addresses, notifications, and orders locally with AsyncStorage through Zustand persistence. Payment data is simulated only, and real card details should never be stored in this demo app.</Text></Screen>;
}
const styles = StyleSheet.create({ body: { fontSize: 15, lineHeight: 23 } });
