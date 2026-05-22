import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';
import { z } from 'zod';
import { Screen } from '@/components/layout/Screen';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/ui/Header';
import { ControlledInput } from '@/components/forms/ControlledInput';
import { registerSchema } from '@/utils/validators';
import { useAuthStore } from '@/store/authStore';
import { useTheme } from '@/hooks/useTheme';

type FormValues = z.infer<typeof registerSchema>;

export default function RegisterScreen() {
  const theme = useTheme();
  const register = useAuthStore((state) => state.register);
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(registerSchema), defaultValues: { name: '', email: '', phone: '', password: '' } });
  const onSubmit = async (values: FormValues) => {
    await register(values);
    router.replace('/(auth)/profile-setup');
  };
  return (
    <Screen contentStyle={styles.container}>
      <Header title="Create account" showBack />
      <Text style={[styles.hint, { color: theme.colors.mutedText }]}>Use mock registration to create and persist a local user session.</Text>
      <ControlledInput control={control} name="name" label="Full name" />
      <ControlledInput control={control} name="email" label="Email" autoCapitalize="none" keyboardType="email-address" />
      <ControlledInput control={control} name="phone" label="Phone" keyboardType="phone-pad" />
      <ControlledInput control={control} name="password" label="Password" secureTextEntry />
      <Button title="Register" loading={isSubmitting} onPress={handleSubmit(onSubmit)} />
    </Screen>
  );
}

const styles = StyleSheet.create({ container: { gap: 14 }, hint: { fontSize: 14, lineHeight: 20 } });
