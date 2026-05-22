import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { z } from 'zod';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { ControlledInput } from '@/components/forms/ControlledInput';
import { profileSchema } from '@/utils/validators';
import { useAuthStore } from '@/store/authStore';

type FormValues = z.infer<typeof profileSchema>;

export default function ProfileSetupScreen() {
  const user = useAuthStore((state) => state.user);
  const updateProfile = useAuthStore((state) => state.updateProfile);
  const { control, handleSubmit } = useForm<FormValues>({ resolver: zodResolver(profileSchema), defaultValues: { name: user?.name ?? '', phone: user?.phone ?? '', location: user?.location ?? '' } });
  const onSubmit = (values: FormValues) => { updateProfile(values); router.replace('/(tabs)'); };
  return <Screen contentStyle={styles.container}><Header title="Profile setup" /><ControlledInput control={control} name="name" label="Full name" /><ControlledInput control={control} name="phone" label="Phone" /><ControlledInput control={control} name="location" label="Location" /><Button title="Finish setup" onPress={handleSubmit(onSubmit)} /></Screen>;
}

const styles = StyleSheet.create({ container: { gap: 14 } });
