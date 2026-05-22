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
import { otpSchema } from '@/utils/validators';
import { authService } from '@/services/authService';

type FormValues = z.infer<typeof otpSchema>;

export default function OtpScreen() {
  const [message, setMessage] = useState('');
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(otpSchema), defaultValues: { code: '123456' } });
  const onSubmit = async (values: FormValues) => { const result = await authService.verifyOtp(values.code); if (result.verified) router.replace('/(auth)/login'); else setMessage('Invalid OTP. Use 123456.'); };
  return <Screen contentStyle={styles.container}><Header title="OTP verification" showBack /><Toast message={message} tone="danger" /><ControlledInput control={control} name="code" label="6-digit code" keyboardType="number-pad" maxLength={6} /><Button title="Verify" loading={isSubmitting} onPress={handleSubmit(onSubmit)} /></Screen>;
}

const styles = StyleSheet.create({ container: { gap: 14 } });
