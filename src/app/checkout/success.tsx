import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

export default function OrderSuccessScreen() {
  const { order } = useLocalSearchParams<{ order?: string }>();
  const theme = useTheme();
  return (
    <Screen scroll={false} contentStyle={styles.container}>
      <Text style={styles.icon}>✅</Text>
      <Text style={[styles.title, { color: theme.colors.text }]}>Order placed successfully</Text>
      <Text style={[styles.body, { color: theme.colors.mutedText }]}>Your mock payment and inventory update were processed. You can track the order from your order history.</Text>
      <Button title="View order" onPress={() => order ? router.replace(`/orders/${order}`) : router.replace('/(tabs)/orders')} />
      <Button title="Continue shopping" variant="ghost" onPress={() => router.replace('/(tabs)')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 14 },
  icon: { fontSize: 78, textAlign: 'center' },
  title: { fontSize: 28, fontWeight: '900', textAlign: 'center' },
  body: { fontSize: 15, lineHeight: 22, textAlign: 'center', marginBottom: 10 }
});
