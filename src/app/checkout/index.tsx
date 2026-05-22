import React, { useMemo, useState } from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { Badge } from '@/components/ui/Badge';
import { useTheme } from '@/hooks/useTheme';
import { useAuthStore } from '@/store/authStore';
import { useCartStore } from '@/store/cartStore';
import { useCatalogStore } from '@/store/catalogStore';
import { useCustomerStore } from '@/store/customerStore';
import { useOrderStore } from '@/store/orderStore';
import { coupons } from '@/data/coupons';
import { deliveryMethods } from '@/data/deliveryMethods';
import { paymentService } from '@/services/paymentService';
import { orderService } from '@/services/orderService';
import { formatMoney } from '@/utils/format';
import { getCheckoutTotals, hasEnoughStock } from '@/utils/calculations';

export default function CheckoutScreen() {
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const items = useCartStore((state) => state.items).filter((item) => !item.savedForLater);
  const clearCart = useCartStore((state) => state.clearCart);
  const couponCode = useCartStore((state) => state.couponCode);
  const products = useCatalogStore((state) => state.products);
  const decrementStock = useCatalogStore((state) => state.decrementStock);
  const addresses = useCustomerStore((state) => state.addresses).filter((item) => item.userId === user?.id);
  const paymentMethods = useCustomerStore((state) => state.paymentMethods).filter((item) => item.userId === user?.id);
  const addOrder = useOrderStore((state) => state.addOrder);
  const [addressId, setAddressId] = useState(addresses[0]?.id);
  const [deliveryId, setDeliveryId] = useState(deliveryMethods[0].id);
  const [paymentId, setPaymentId] = useState(paymentMethods[0]?.id ?? 'cod');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const coupon = coupons.find((item) => item.code === couponCode);
  const delivery = deliveryMethods.find((item) => item.id === deliveryId) ?? deliveryMethods[0];
  const totals = useMemo(() => getCheckoutTotals(items, products, coupon, delivery), [items, products, coupon, delivery]);
  const selectedAddress = addresses.find((item) => item.id === addressId) ?? addresses[0];
  const selectedPayment = paymentMethods.find((item) => item.id === paymentId) ?? { id: 'cod', userId: user?.id ?? 'guest', type: 'cod' as const, title: 'Cash on Delivery', isDefault: true };

  const placeOrder = async () => {
    if (!user) { setMessage('Login is required.'); return; }
    if (!items.length) { setMessage('Cart is empty.'); return; }
    if (!selectedAddress) { setMessage('Add a shipping address first.'); return; }
    if (!hasEnoughStock(items, products)) { setMessage('Some cart items are out of stock.'); return; }
    setLoading(true);
    try {
      const payment = await paymentService.process(selectedPayment.type, totals.grandTotal);
      if (!payment.approved) { router.push('/checkout/payment?status=failed'); return; }
      const order = await orderService.createOrder({ userId: user.id, items, products, address: selectedAddress, paymentMethod: selectedPayment, deliveryMethod: delivery, couponCode });
      addOrder(order);
      decrementStock(items);
      clearCart();
      router.replace(`/checkout/success?order=${order.id}`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Checkout failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <Header title="Checkout" showBack />
      <Toast message={message} tone="danger" />
      <Text style={[styles.section, { color: theme.colors.text }]}>Shipping address</Text>
      <View style={styles.list}>{addresses.map((address) => <Pressable key={address.id} onPress={() => setAddressId(address.id)} style={[styles.option, { backgroundColor: addressId === address.id ? theme.colors.surfaceAlt : theme.colors.surface, borderColor: addressId === address.id ? theme.colors.primary : theme.colors.border, borderRadius: theme.radius.lg }]}><Text style={[styles.optionTitle, { color: theme.colors.text }]}>{address.label}</Text><Text style={[styles.optionBody, { color: theme.colors.mutedText }]}>{address.line1}, {address.city}</Text></Pressable>)}</View>
      <Button title="Manage addresses" variant="ghost" onPress={() => router.push('/profile/addresses')} />
      <Text style={[styles.section, { color: theme.colors.text }]}>Delivery method</Text>
      <View style={styles.list}>{deliveryMethods.map((method) => <Pressable key={method.id} onPress={() => setDeliveryId(method.id)} style={[styles.option, { backgroundColor: deliveryId === method.id ? theme.colors.surfaceAlt : theme.colors.surface, borderColor: deliveryId === method.id ? theme.colors.primary : theme.colors.border, borderRadius: theme.radius.lg }]}><View style={styles.row}><Text style={[styles.optionTitle, { color: theme.colors.text }]}>{method.title}</Text><Badge label={method.fee ? formatMoney(method.fee) : 'Free'} /></View><Text style={[styles.optionBody, { color: theme.colors.mutedText }]}>{method.description} • {method.days}</Text></Pressable>)}</View>
      <Text style={[styles.section, { color: theme.colors.text }]}>Payment method</Text>
      <View style={styles.list}>{[...paymentMethods, { id: 'cod', userId: user?.id ?? 'guest', type: 'cod' as const, title: 'Cash on Delivery', isDefault: false }].map((method) => <Pressable key={method.id} onPress={() => setPaymentId(method.id)} style={[styles.option, { backgroundColor: paymentId === method.id ? theme.colors.surfaceAlt : theme.colors.surface, borderColor: paymentId === method.id ? theme.colors.primary : theme.colors.border, borderRadius: theme.radius.lg }]}><Text style={[styles.optionTitle, { color: theme.colors.text }]}>{method.title}</Text><Text style={[styles.optionBody, { color: theme.colors.mutedText }]}>{method.type.toUpperCase()}</Text></Pressable>)}</View>
      <Button title="Add mock card" variant="ghost" onPress={() => router.push('/checkout/payment')} />
      <View style={[styles.summary, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.xl }]}>
        <Text style={[styles.section, { color: theme.colors.text }]}>Order summary</Text>
        <Line label="Subtotal" value={formatMoney(totals.subtotal)} />
        <Line label="Coupon" value={`-${formatMoney(totals.couponDiscount)}`} />
        <Line label="Shipping" value={formatMoney(totals.shippingFee)} />
        <Line label="Tax" value={formatMoney(totals.tax)} />
        <Line label="Total" value={formatMoney(totals.grandTotal)} strong />
      </View>
      <Button title="Place order" loading={loading} onPress={placeOrder} />
    </Screen>
  );
}

const Line = ({ label, value, strong }: { label: string; value: string; strong?: boolean }) => {
  const theme = useTheme();
  return <View style={styles.line}><Text style={[styles.lineLabel, strong && styles.strong, { color: theme.colors.mutedText }]}>{label}</Text><Text style={[styles.lineValue, strong && styles.strong, { color: theme.colors.text }]}>{value}</Text></View>;
};

const styles = StyleSheet.create({
  section: { fontSize: 18, fontWeight: '900', marginTop: 12, marginBottom: 8 },
  list: { gap: 10 },
  option: { borderWidth: 1, padding: 13, gap: 5 },
  optionTitle: { fontSize: 15, fontWeight: '900' },
  optionBody: { fontSize: 13, lineHeight: 18 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  summary: { borderWidth: 1, padding: 14, gap: 8, marginTop: 12 },
  line: { flexDirection: 'row', justifyContent: 'space-between' },
  lineLabel: { fontSize: 14 },
  lineValue: { fontSize: 14, fontWeight: '800' },
  strong: { fontSize: 18, fontWeight: '900' }
});
