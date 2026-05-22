import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { useCustomerStore } from '@/store/customerStore';
import { useAuthStore } from '@/store/authStore';
import { useTheme } from '@/hooks/useTheme';

export default function PaymentMethodsScreen() {
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const methods = useCustomerStore((state) => state.paymentMethods).filter((item) => item.userId === user?.id);
  const remove = useCustomerStore((state) => state.deletePaymentMethod);
  return (
    <Screen>
      <Header title="Payment methods" showBack right={<Button title="Add" onPress={() => router.push('/checkout/payment')} style={styles.add} />} />
      {!methods.length ? <EmptyState title="No saved payment methods" message="Add a mock card or use Cash on Delivery at checkout." /> : <View style={styles.list}>{methods.map((method) => <View key={method.id} style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}><View><Text style={[styles.title, { color: theme.colors.text }]}>{method.title}</Text><Text style={[styles.body, { color: theme.colors.mutedText }]}>{method.type.toUpperCase()} {method.expiry ? `• ${method.expiry}` : ''}</Text></View><Pressable onPress={() => remove(method.id)}><Text style={{ color: theme.colors.danger, fontWeight: '900' }}>Delete</Text></Pressable></View>)}</View>}
    </Screen>
  );
}

const styles = StyleSheet.create({ add: { minHeight: 38, paddingHorizontal: 14 }, list: { gap: 12 }, card: { borderWidth: 1, padding: 14, flexDirection: 'row', justifyContent: 'space-between', gap: 12 }, title: { fontSize: 16, fontWeight: '900' }, body: { fontSize: 13, marginTop: 4 } });
