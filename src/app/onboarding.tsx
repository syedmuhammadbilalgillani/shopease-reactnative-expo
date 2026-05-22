import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout/Screen';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/appStore';
import { useTheme } from '@/hooks/useTheme';

const slides = [
  { title: 'Shop everything smarter', body: 'Browse curated products, compare deals, and buy with a fast mobile checkout.', icon: '🛍️' },
  { title: 'Track every order', body: 'Follow order status from pending to delivered with a clear timeline.', icon: '🚚' },
  { title: 'Built for real commerce', body: 'Wishlist, reviews, coupons, inventory checks, saved addresses, and mock payments.', icon: '⚡' }
];

export default function OnboardingScreen() {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const completeOnboarding = useAppStore((state) => state.completeOnboarding);
  const finish = () => { completeOnboarding(); router.replace('/(auth)/login'); };
  const slide = slides[index];
  return (
    <Screen scroll={false} contentStyle={styles.content}>
      <Button title="Skip" variant="ghost" onPress={finish} style={styles.skip} />
      <View style={styles.hero}>
        <Text style={styles.icon}>{slide.icon}</Text>
        <Text style={[styles.title, { color: theme.colors.text }]}>{slide.title}</Text>
        <Text style={[styles.body, { color: theme.colors.mutedText }]}>{slide.body}</Text>
      </View>
      <View style={styles.dots}>{slides.map((_, dot) => <View key={dot} style={[styles.dot, { backgroundColor: dot === index ? theme.colors.primary : theme.colors.border }]} />)}</View>
      <Button title={index === slides.length - 1 ? 'Start shopping' : 'Continue'} onPress={() => index === slides.length - 1 ? finish() : setIndex(index + 1)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, justifyContent: 'space-between', paddingTop: 24 },
  skip: { alignSelf: 'flex-end', minHeight: 38 },
  hero: { alignItems: 'center', gap: 16 },
  icon: { fontSize: 90 },
  title: { fontSize: 30, fontWeight: '900', textAlign: 'center' },
  body: { fontSize: 16, lineHeight: 24, textAlign: 'center' },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 8 },
  dot: { width: 26, height: 6, borderRadius: 8 }
});
