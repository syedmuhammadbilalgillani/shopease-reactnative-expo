import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

type Props = { message?: string; tone?: 'success' | 'danger' | 'info'; style?: StyleProp<ViewStyle> };

export const Toast = ({ message, tone = 'info', style }: Props) => {
  const theme = useTheme();
  if (!message) return null;
  const color = tone === 'success' ? theme.colors.success : tone === 'danger' ? theme.colors.danger : theme.colors.info;
  return <View style={[styles.toast, { backgroundColor: theme.colors.surface, borderColor: color, borderRadius: theme.radius.md }, style]}><Text style={[styles.text, { color: theme.colors.text }]}>{message}</Text></View>;
};

const styles = StyleSheet.create({
  toast: { borderLeftWidth: 4, padding: 12, marginVertical: 8 },
  text: { fontSize: 13, fontWeight: '700' }
});
