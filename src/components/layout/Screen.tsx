import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

export const Screen = ({ children, scroll = true, style, contentStyle }: Props) => {
  const theme = useTheme();
  const content = scroll ? (
    <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} contentContainerStyle={[styles.content, contentStyle]}>{children}</ScrollView>
  ) : <View style={[styles.content, styles.flex, contentStyle]}>{children}</View>;
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }, style]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>{content}</KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1 },
  flex: { flex: 1 },
  content: { padding: 16, paddingBottom: 32 }
});
