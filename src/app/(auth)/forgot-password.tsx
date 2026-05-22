import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { z } from 'zod';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { ControlledInput } from '@/components/forms/ControlledInput';
import { forgotSchema } from '@/utils/validators';
import { authService } from '@/services/authService';

type FormValues = z.infer<typeof forgotSchema>;

export default function ForgotPasswordScreen() {
  const [message, setMessage] = useState('');
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(forgotSchema), defaultValues: { email: '' } });
  const onSubmit = async (values: FormValues) => { await authService.requestOtp(values.email); setMessage('Mock OTP sent. Use 123456.'); router.push('/(auth)/otp'); };
  return <Screen contentStyle={styles.container}><Header title="Forgot password" showBack /><Toast message={message} tone="success" /><ControlledInput control={control} name="email" label="Email" autoCapitalize="none" keyboardType="email-address" /><Button title="Send OTP" loading={isSubmitting} onPress={handleSubmit(onSubmit)} /></Screen>;
}

const styles = StyleSheet.create({ container: { gap: 14 } });
