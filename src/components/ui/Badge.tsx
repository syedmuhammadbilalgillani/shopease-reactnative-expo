import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

type Props = { label: string; tone?: 'default' | 'success' | 'warning' | 'danger'; style?: StyleProp<ViewStyle> };

export const Badge = ({ label, tone = 'default', style }: Props) => {
  const theme = useTheme();
  const color = tone === 'success' ? theme.colors.success : tone === 'warning' ? theme.colors.warning : tone === 'danger' ? theme.colors.danger : theme.colors.primary;
  return <View style={[styles.badge, { backgroundColor: theme.colors.badge, borderRadius: theme.radius.pill }, style]}><Text style={[styles.text, { color }]}>{label}</Text></View>;
};

const styles = StyleSheet.create({
  badge: { alignSelf: 'flex-start', paddingHorizontal: 9, paddingVertical: 5 },
  text: { fontSize: 11, fontWeight: '800' }
});
