import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export const LoadingState = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  const theme = useTheme();
  return <View style={[styles.container, style]}><ActivityIndicator color={theme.colors.primary} size="large" /></View>;
};

export const SkeletonBox = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  const theme = useTheme();
  return <View style={[styles.skeleton, { backgroundColor: theme.colors.surfaceAlt, borderRadius: theme.radius.md }, style]} />;
};

const styles = StyleSheet.create({
  container: { padding: 28, alignItems: 'center', justifyContent: 'center' },
  skeleton: { minHeight: 20 }
});
