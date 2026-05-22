import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { useTheme } from '@/hooks/useTheme';

export default function HelpScreen() {
  const theme = useTheme();
  return <Screen><Header title="Help center" showBack /><View style={styles.block}><Text style={[styles.title, { color: theme.colors.text }]}>Common support topics</Text><Text style={[styles.body, { color: theme.colors.mutedText }]}>Orders, returns, coupons, saved cards, account settings, and delivery tracking are mocked for this demo app. Use the profile and checkout flows to test each case.</Text></View></Screen>;
}
const styles = StyleSheet.create({ block: { gap: 8 }, title: { fontSize: 18, fontWeight: '900' }, body: { fontSize: 14, lineHeight: 21 } });
