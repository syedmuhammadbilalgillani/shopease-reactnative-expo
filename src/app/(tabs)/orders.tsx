import React from 'react';
import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/EmptyState';
import { useOrderStore } from '@/store/orderStore';
import { useAuthStore } from '@/store/authStore';
import { useTheme } from '@/hooks/useTheme';
import { formatDate, formatMoney } from '@/utils/format';

export default function OrdersScreen() {
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const allOrders = useOrderStore((state) => state.orders);
  const orders = allOrders.filter((order) => !user || order.userId === user.id || user.email === 'admin@shopease.dev');
  return (
    <Screen>
      <Header title="My orders" subtitle="Review, track, cancel, and reorder" />
      {orders.length === 0 ? <EmptyState title="No orders yet" message="Place your first order to see it here." /> : (
        <FlatList scrollEnabled={false} data={orders} keyExtractor={(item) => item.id} ItemSeparatorComponent={() => <View style={styles.separator} />} renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/orders/${item.id}`)} style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}>
            <View style={styles.row}><Text style={[styles.number, { color: theme.colors.text }]}>{item.number}</Text><Badge label={item.status} tone={item.status === 'Cancelled' ? 'danger' : item.status === 'Delivered' ? 'success' : 'default'} /></View>
            <Text style={[styles.meta, { color: theme.colors.mutedText }]}>{formatDate(item.createdAt)} • {item.items.length} items</Text>
            <Text style={[styles.total, { color: theme.colors.text }]}>{formatMoney(item.grandTotal)}</Text>
          </Pressable>
        )} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, padding: 14, gap: 7 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 },
  number: { fontSize: 16, fontWeight: '900' },
  meta: { fontSize: 13 },
  total: { fontSize: 18, fontWeight: '900' },
  separator: { height: 12 }
});
