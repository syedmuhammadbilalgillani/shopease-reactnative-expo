import React from 'react';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/EmptyState';
import { OrderStatusTimeline } from '@/components/order/OrderStatusTimeline';
import { useOrderStore } from '@/store/orderStore';
import { useCartStore } from '@/store/cartStore';
import { useTheme } from '@/hooks/useTheme';
import { formatDate, formatMoney } from '@/utils/format';

export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const order = useOrderStore((state) => state.orders.find((item) => item.id === id));
  const cancelOrder = useOrderStore((state) => state.cancelOrder);
  const addItem = useCartStore((state) => state.addItem);
  if (!order) return <Screen><Header title="Order" showBack /><EmptyState title="Order not found" message="This order is not available." /></Screen>;
  return (
    <Screen>
      <Header title={order.number} subtitle={formatDate(order.createdAt)} showBack />
      <View style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.xl }]}>
        <View style={styles.row}><Text style={[styles.title, { color: theme.colors.text }]}>Status</Text><Badge label={order.status} tone={order.status === 'Cancelled' ? 'danger' : order.status === 'Delivered' ? 'success' : 'default'} /></View>
        <OrderStatusTimeline order={order} />
      </View>
      <View style={styles.actions}><Button title="Track order" onPress={() => router.push(`/orders/track/${order.id}`)} style={styles.action} /><Button title="Reorder" variant="secondary" onPress={() => { order.items.forEach((item) => addItem(item.productId, item.quantity)); router.push('/(tabs)/cart'); }} style={styles.action} /></View>
      {order.status !== 'Cancelled' && order.status !== 'Delivered' ? <Button title="Cancel order" variant="danger" onPress={() => cancelOrder(order.id)} /> : null}
      <Text style={[styles.section, { color: theme.colors.text }]}>Items</Text>
      {order.items.map((item) => <View key={`${item.productId}-${item.variantName}`} style={[styles.item, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}><Image source={{ uri: item.image }} style={[styles.image, { borderRadius: theme.radius.md }]} /><View style={styles.itemText}><Text style={[styles.itemName, { color: theme.colors.text }]}>{item.name}</Text><Text style={[styles.meta, { color: theme.colors.mutedText }]}>Qty {item.quantity} • {item.variantName}</Text><Text style={[styles.total, { color: theme.colors.text }]}>{formatMoney(item.price * item.quantity)}</Text></View></View>)}
      <View style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.xl }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Invoice summary</Text>
        <Line label="Subtotal" value={formatMoney(order.subtotal)} />
        <Line label="Discount" value={`-${formatMoney(order.discount)}`} />
        <Line label="Shipping" value={formatMoney(order.shippingFee)} />
        <Line label="Tax" value={formatMoney(order.tax)} />
        <Line label="Grand total" value={formatMoney(order.grandTotal)} strong />
      </View>
    </Screen>
  );
}

const Line = ({ label, value, strong }: { label: string; value: string; strong?: boolean }) => {
  const theme = useTheme();
  return <View style={styles.line}><Text style={[styles.meta, strong && styles.strong, { color: theme.colors.mutedText }]}>{label}</Text><Text style={[styles.lineValue, strong && styles.strong, { color: theme.colors.text }]}>{value}</Text></View>;
};

const styles = StyleSheet.create({
  card: { borderWidth: 1, padding: 14, gap: 12, marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 18, fontWeight: '900' },
  section: { fontSize: 18, fontWeight: '900', marginVertical: 10 },
  actions: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  action: { flex: 1 },
  item: { borderWidth: 1, padding: 10, flexDirection: 'row', gap: 12, marginBottom: 10 },
  image: { width: 72, height: 72, backgroundColor: '#E2E8F0' },
  itemText: { flex: 1, gap: 4 },
  itemName: { fontSize: 14, fontWeight: '900' },
  meta: { fontSize: 13 },
  total: { fontSize: 14, fontWeight: '900' },
  line: { flexDirection: 'row', justifyContent: 'space-between' },
  lineValue: { fontSize: 14, fontWeight: '800' },
  strong: { fontSize: 17, fontWeight: '900' }
});
