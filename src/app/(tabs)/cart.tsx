import React, { useMemo, useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { TextInputField } from '@/components/ui/TextInput';
import { EmptyState } from '@/components/ui/EmptyState';
import { Toast } from '@/components/ui/Toast';
import { CartItemRow } from '@/components/cart/CartItemRow';
import { useTheme } from '@/hooks/useTheme';
import { useCartStore } from '@/store/cartStore';
import { useCatalogStore } from '@/store/catalogStore';
import { coupons } from '@/data/coupons';
import { formatMoney } from '@/utils/format';
import { getCheckoutTotals, validateCoupon } from '@/utils/calculations';

export default function CartScreen() {
  const theme = useTheme();
  const items = useCartStore((state) => state.items);
  const couponCode = useCartStore((state) => state.couponCode);
  const applyCoupon = useCartStore((state) => state.applyCoupon);
  const products = useCatalogStore((state) => state.products);
  const [code, setCode] = useState(couponCode ?? '');
  const [message, setMessage] = useState('');
  const activeItems = items.filter((item) => !item.savedForLater);
  const coupon = coupons.find((item) => item.code === couponCode);
  const totals = useMemo(() => getCheckoutTotals(items, products, coupon), [items, products, coupon]);

  const apply = () => {
    const candidate = coupons.find((item) => item.code === code.trim().toUpperCase());
    const result = validateCoupon(candidate, totals.subtotal);
    setMessage(result.message);
    if (result.valid) applyCoupon(candidate?.code);
  };

  if (!items.length) return <Screen><Header title="Cart" /><EmptyState title="Your cart is empty" message="Add products to cart and continue checkout." actionLabel="Start shopping" onAction={() => router.push('/(tabs)')} /></Screen>;

  return (
    <Screen>
      <Header title="Cart" subtitle={`${activeItems.length} ready for checkout`} />
      <Toast message={message} tone={message.includes('applied') ? 'success' : 'danger'} />
      <View style={styles.list}>{items.map((item) => { const product = products.find((candidate) => candidate.id === item.productId); return product ? <CartItemRow key={item.id} item={item} product={product} /> : null; })}</View>
      <View style={[styles.summary, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.xl }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Coupon</Text>
        <View style={styles.couponRow}><TextInputField value={code} onChangeText={setCode} placeholder="WELCOME10" containerStyle={styles.couponInput} /><Button title="Apply" onPress={apply} style={styles.applyButton} /></View>
        <Text style={[styles.title, { color: theme.colors.text }]}>Price summary</Text>
        <Line label="Subtotal" value={formatMoney(totals.subtotal)} />
        <Line label="Product discount" value={`-${formatMoney(totals.discount)}`} />
        <Line label="Coupon discount" value={`-${formatMoney(totals.couponDiscount)}`} />
        <Line label="Shipping" value={formatMoney(totals.shippingFee)} />
        <Line label="Tax" value={formatMoney(totals.tax)} />
        <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />
        <Line label="Grand total" value={formatMoney(totals.grandTotal)} strong />
        <Button title="Checkout" disabled={!activeItems.length} onPress={() => router.push('/checkout')} style={styles.checkout} />
      </View>
    </Screen>
  );
}

const Line = ({ label, value, strong }: { label: string; value: string; strong?: boolean }) => {
  const theme = useTheme();
  return <View style={styles.line}><Text style={[styles.lineLabel, strong && styles.strong, { color: theme.colors.mutedText }]}>{label}</Text><Text style={[styles.lineValue, strong && styles.strong, { color: theme.colors.text }]}>{value}</Text></View>;
};

const styles = StyleSheet.create({
  list: { gap: 12 },
  summary: { borderWidth: 1, padding: 14, marginTop: 16, gap: 10 },
  title: { fontSize: 17, fontWeight: '900' },
  couponRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  couponInput: { flex: 1 },
  applyButton: { minHeight: 48, paddingHorizontal: 14 },
  line: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  lineLabel: { fontSize: 14 },
  lineValue: { fontSize: 14, fontWeight: '800' },
  strong: { fontSize: 17, fontWeight: '900' },
  divider: { height: 1, marginVertical: 4 },
  checkout: { marginTop: 8 }
});
