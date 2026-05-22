import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Button } from './Button';

type Props = { title: string; message: string; actionLabel?: string; onAction?: () => void; style?: StyleProp<ViewStyle> };

export const EmptyState = ({ title, message, actionLabel, onAction, style }: Props) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.emoji}>🛒</Text>
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      <Text style={[styles.message, { color: theme.colors.mutedText }]}>{message}</Text>
      {actionLabel ? <Button title={actionLabel} onPress={onAction} style={styles.button} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', padding: 28, gap: 8 },
  emoji: { fontSize: 42 },
  title: { fontSize: 20, fontWeight: '900', textAlign: 'center' },
  message: { fontSize: 14, textAlign: 'center', lineHeight: 20 },
  button: { marginTop: 10, alignSelf: 'stretch' }
});
