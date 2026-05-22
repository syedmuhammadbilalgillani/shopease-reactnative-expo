import React, { useMemo } from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { LOW_STOCK_THRESHOLD } from '@/constants';
import { useCatalogStore } from '@/store/catalogStore';
import { useOrderStore } from '@/store/orderStore';
import { useTheme } from '@/hooks/useTheme';
import { formatMoney } from '@/utils/format';

export default function AdminDashboardScreen() {
  const theme = useTheme();
  const products = useCatalogStore((state) => state.products);
  const orders = useOrderStore((state) => state.orders);
  const stats = useMemo(() => {
    const revenue = orders.filter((order) => order.status !== 'Cancelled').reduce((sum, order) => sum + order.grandTotal, 0);
    const lowStock = products.filter((product) => product.stock <= LOW_STOCK_THRESHOLD);
    const inventoryValue = products.reduce((sum, product) => sum + product.price * product.stock, 0);
    return { revenue, lowStock, inventoryValue };
  }, [orders, products]);
  return (
    <Screen>
      <Header title="Business panel" subtitle="Hidden admin section for demo operations" showBack />
      <View style={styles.grid}>
        <Stat title="Sales" value={formatMoney(stats.revenue)} />
        <Stat title="Orders" value={String(orders.length)} />
        <Stat title="Inventory" value={formatMoney(stats.inventoryValue)} />
        <Stat title="Low stock" value={String(stats.lowStock.length)} danger={stats.lowStock.length > 0} />
      </View>
      <Button title="Manage products" onPress={() => router.push('/admin/products')} />
      <Text style={[styles.section, { color: theme.colors.text }]}>Low stock products</Text>
      <View style={styles.list}>{stats.lowStock.slice(0, 10).map((product) => <Pressable key={product.id} onPress={() => router.push(`/admin/product-editor?id=${product.id}`)} style={[styles.row, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.md }]}><Text style={[styles.name, { color: theme.colors.text }]}>{product.name}</Text><Text style={{ color: theme.colors.danger, fontWeight: '900' }}>{product.stock}</Text></Pressable>)}</View>
      <Text style={[styles.section, { color: theme.colors.text }]}>Recent mock orders</Text>
      <View style={styles.list}>{orders.slice(0, 8).map((order) => <Pressable key={order.id} onPress={() => router.push(`/orders/${order.id}`)} style={[styles.row, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.md }]}><Text style={[styles.name, { color: theme.colors.text }]}>{order.number}</Text><Text style={{ color: theme.colors.mutedText }}>{order.status}</Text></Pressable>)}</View>
    </Screen>
  );
}

const Stat = ({ title, value, danger }: { title: string; value: string; danger?: boolean }) => {
  const theme = useTheme();
  return <View style={[styles.stat, { backgroundColor: theme.colors.surface, borderColor: danger ? theme.colors.danger : theme.colors.border, borderRadius: theme.radius.lg }]}><Text style={[styles.statTitle, { color: theme.colors.mutedText }]}>{title}</Text><Text style={[styles.statValue, { color: danger ? theme.colors.danger : theme.colors.text }]}>{value}</Text></View>;
};

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 12 },
  stat: { width: '48%', borderWidth: 1, padding: 14, gap: 5 },
  statTitle: { fontSize: 12, fontWeight: '800' },
  statValue: { fontSize: 18, fontWeight: '900' },
  section: { fontSize: 18, fontWeight: '900', marginTop: 18, marginBottom: 8 },
  list: { gap: 8 },
  row: { borderWidth: 1, padding: 12, flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  name: { flex: 1, fontSize: 14, fontWeight: '800' }
});
