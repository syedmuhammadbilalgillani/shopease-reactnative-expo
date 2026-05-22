import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { EmptyState } from '@/components/ui/EmptyState';
import { OrderStatusTimeline } from '@/components/order/OrderStatusTimeline';
import { useOrderStore } from '@/store/orderStore';
import { useTheme } from '@/hooks/useTheme';

export default function TrackOrderScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const order = useOrderStore((state) => state.orders.find((item) => item.id === id));
  if (!order) return <Screen><Header title="Track order" showBack /><EmptyState title="Tracking unavailable" message="Order was not found." /></Screen>;
  return (
    <Screen>
      <Header title="Track order" subtitle={order.number} showBack />
      <View style={[styles.map, { backgroundColor: theme.colors.surfaceAlt, borderRadius: theme.radius.xl }]}>
        <Text style={styles.truck}>🚚</Text>
        <Text style={[styles.mapTitle, { color: theme.colors.text }]}>Mock live tracking</Text>
        <Text style={[styles.mapBody, { color: theme.colors.mutedText }]}>Courier is simulated between warehouse and your delivery address.</Text>
      </View>
      <OrderStatusTimeline order={order} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  map: { height: 220, alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16, padding: 18 },
  truck: { fontSize: 58 },
  mapTitle: { fontSize: 20, fontWeight: '900' },
  mapBody: { textAlign: 'center', fontSize: 14, lineHeight: 20 }
});
