import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { z } from 'zod';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { AppModal } from '@/components/ui/AppModal';
import { ControlledInput } from '@/components/forms/ControlledInput';
import { addressSchema } from '@/utils/validators';
import { useCustomerStore } from '@/store/customerStore';
import { useAuthStore } from '@/store/authStore';
import { useTheme } from '@/hooks/useTheme';

type FormValues = z.infer<typeof addressSchema>;

export default function AddressesScreen() {
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const addresses = useCustomerStore((state) => state.addresses).filter((item) => item.userId === user?.id);
  const addAddress = useCustomerStore((state) => state.addAddress);
  const deleteAddress = useCustomerStore((state) => state.deleteAddress);
  const [open, setOpen] = useState(false);
  const { control, handleSubmit, reset } = useForm<FormValues>({ resolver: zodResolver(addressSchema), defaultValues: { label: 'Home', fullName: user?.name ?? '', phone: user?.phone ?? '', line1: '', city: '', state: '', postalCode: '', country: 'USA' } });
  const submit = (values: FormValues) => { addAddress({ ...values, userId: user?.id ?? 'guest', isDefault: addresses.length === 0 }); reset(); setOpen(false); };
  return (
    <Screen>
      <Header title="Addresses" showBack right={<Button title="Add" onPress={() => setOpen(true)} style={styles.add} />} />
      <View style={styles.list}>{addresses.map((address) => <View key={address.id} style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}><Text style={[styles.title, { color: theme.colors.text }]}>{address.label} {address.isDefault ? '• Default' : ''}</Text><Text style={[styles.body, { color: theme.colors.mutedText }]}>{address.fullName}, {address.phone}</Text><Text style={[styles.body, { color: theme.colors.mutedText }]}>{address.line1}, {address.city}, {address.country}</Text><Pressable onPress={() => deleteAddress(address.id)}><Text style={{ color: theme.colors.danger, fontWeight: '900' }}>Delete</Text></Pressable></View>)}</View>
      <AppModal visible={open} title="Add address" onClose={() => setOpen(false)}>
        <View style={styles.form}><ControlledInput control={control} name="label" label="Label" /><ControlledInput control={control} name="fullName" label="Full name" /><ControlledInput control={control} name="phone" label="Phone" /><ControlledInput control={control} name="line1" label="Address" /><ControlledInput control={control} name="city" label="City" /><ControlledInput control={control} name="state" label="State" /><ControlledInput control={control} name="postalCode" label="Postal code" /><ControlledInput control={control} name="country" label="Country" /><Button title="Save address" onPress={handleSubmit(submit)} /></View>
      </AppModal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  add: { minHeight: 38, paddingHorizontal: 14 },
  list: { gap: 12 },
  card: { borderWidth: 1, padding: 14, gap: 5 },
  title: { fontSize: 16, fontWeight: '900' },
  body: { fontSize: 13, lineHeight: 18 },
  form: { gap: 10, maxHeight: 520 }
});
