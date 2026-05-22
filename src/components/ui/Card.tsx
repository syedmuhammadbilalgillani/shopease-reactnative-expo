import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

type Props = { children: React.ReactNode; style?: StyleProp<ViewStyle> };

export const Card = ({ children, style }: Props) => {
  const theme = useTheme();
  return <View style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg, shadowColor: theme.colors.shadow }, theme.shadows.soft, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: { borderWidth: 1, padding: 14 }
});
