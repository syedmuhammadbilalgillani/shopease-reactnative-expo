import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { useTheme } from '@/hooks/useTheme';

export default function TermsScreen() {
  const theme = useTheme();
  return <Screen><Header title="Terms and conditions" showBack /><Text style={[styles.body, { color: theme.colors.mutedText }]}>This is a production-style mock ecommerce app for demo and development use. Product catalog, checkout, payments, order tracking, notifications, and admin data are simulated locally.</Text></Screen>;
}
const styles = StyleSheet.create({ body: { fontSize: 15, lineHeight: 23 } });
