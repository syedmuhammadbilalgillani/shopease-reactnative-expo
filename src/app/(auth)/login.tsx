import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, Pressable } from 'react-native';
import { z } from 'zod';
import { Screen } from '@/components/layout/Screen';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { ControlledInput } from '@/components/forms/ControlledInput';
import { loginSchema } from '@/utils/validators';
import { useAuthStore } from '@/store/authStore';
import { useTheme } from '@/hooks/useTheme';

type FormValues = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const theme = useTheme();
  const login = useAuthStore((state) => state.login);
  const [message, setMessage] = useState('');
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(loginSchema), defaultValues: { email: 'ava@shopease.dev', password: 'Password123' } });
  const onSubmit = async (values: FormValues) => {
    const ok = await login(values.email, values.password);
    if (ok) router.replace('/(tabs)');
    else setMessage('Invalid mock credentials. Try ava@shopease.dev / Password123.');
  };
  return (
    <Screen contentStyle={styles.container}>
      <Text style={[styles.logo, { color: theme.colors.primary }]}>ShopEase</Text>
      <Text style={[styles.title, { color: theme.colors.text }]}>Welcome back</Text>
      <Text style={[styles.subtitle, { color: theme.colors.mutedText }]}>Login to continue shopping.</Text>
      <Toast message={message} tone="danger" />
      <ControlledInput control={control} name="email" label="Email" autoCapitalize="none" keyboardType="email-address" />
      <ControlledInput control={control} name="password" label="Password" secureTextEntry />
      <Button title="Login" loading={isSubmitting} onPress={handleSubmit(onSubmit)} />
      <Pressable onPress={() => router.push('/(auth)/forgot-password')}><Text style={[styles.link, { color: theme.colors.primary }]}>Forgot password?</Text></Pressable>
      <Pressable onPress={() => router.push('/(auth)/register')}><Text style={[styles.link, { color: theme.colors.text }]}>Create new account</Text></Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { gap: 14, paddingTop: 36 },
  logo: { fontSize: 34, fontWeight: '900' },
  title: { fontSize: 26, fontWeight: '900' },
  subtitle: { fontSize: 15, marginBottom: 8 },
  link: { textAlign: 'center', fontSize: 14, fontWeight: '800', paddingVertical: 6 }
});
