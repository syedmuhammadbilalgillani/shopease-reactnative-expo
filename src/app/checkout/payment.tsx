import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { router, useLocalSearchParams } from 'expo-router';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import { z } from 'zod';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { ControlledInput } from '@/components/forms/ControlledInput';
import { cardSchema } from '@/utils/validators';
import { useCustomerStore } from '@/store/customerStore';
import { useAuthStore } from '@/store/authStore';
import { useTheme } from '@/hooks/useTheme';

type FormValues = z.infer<typeof cardSchema>;

export default function PaymentScreen() {
  const { status } = useLocalSearchParams<{ status?: string }>();
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const addPaymentMethod = useCustomerStore((state) => state.addPaymentMethod);
  const methods = useCustomerStore((state) => state.paymentMethods).filter((item) => item.userId === user?.id);
  const { control, handleSubmit } = useForm<FormValues>({ resolver: zodResolver(cardSchema), defaultValues: { name: user?.name ?? '', number: '4242424242424242', expiry: '12/28', cvc: '123' } });
  const submit = (values: FormValues) => { addPaymentMethod({ userId: user?.id ?? 'guest', type: 'card', title: `Card ending ${values.number.slice(-4)}`, last4: values.number.slice(-4), brand: 'Visa', expiry: values.expiry, isDefault: methods.length === 0 }); router.back(); };
  return (
    <Screen>
      <Header title="Payment" subtitle="Mock card, wallet, and cash on delivery" showBack />
      <Toast message={status === 'failed' ? 'Payment failed in mock gateway. Choose another method.' : ''} tone="danger" />
      <View style={[styles.info, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}>
        <Text style={[styles.infoTitle, { color: theme.colors.text }]}>Security note</Text>
        <Text style={[styles.infoText, { color: theme.colors.mutedText }]}>This app stores only mock card labels. It never stores real payment data.</Text>
      </View>
      <Text style={[styles.section, { color: theme.colors.text }]}>Saved cards</Text>
      {methods.map((method) => <View key={method.id} style={[styles.method, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.md }]}><Text style={[styles.methodText, { color: theme.colors.text }]}>{method.title}</Text><Text style={{ color: theme.colors.mutedText }}>{method.expiry}</Text></View>)}
      <Text style={[styles.section, { color: theme.colors.text }]}>Add mock card</Text>
      <ControlledInput control={control} name="name" label="Cardholder name" />
      <ControlledInput control={control} name="number" label="Card number" keyboardType="number-pad" maxLength={16} />
      <ControlledInput control={control} name="expiry" label="Expiry" placeholder="MM/YY" />
      <ControlledInput control={control} name="cvc" label="CVC" keyboardType="number-pad" maxLength={4} />
      <Button title="Save card" onPress={handleSubmit(submit)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  info: { borderWidth: 1, padding: 14, gap: 5 },
  infoTitle: { fontSize: 16, fontWeight: '900' },
  infoText: { fontSize: 13, lineHeight: 19 },
  section: { fontSize: 18, fontWeight: '900', marginTop: 18, marginBottom: 8 },
  method: { borderWidth: 1, padding: 12, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' },
  methodText: { fontSize: 14, fontWeight: '800' }
});
