import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';

type Props = { title: string; subtitle?: string; showBack?: boolean; right?: React.ReactNode; style?: StyleProp<ViewStyle> };

export const Header = ({ title, subtitle, showBack, right, style }: Props) => {
  const theme = useTheme();
  return (
    <View style={[styles.header, style]}>
      <View style={styles.left}>
        {showBack ? <Pressable onPress={() => router.back()} style={[styles.back, { borderColor: theme.colors.border }]}><Text style={{ color: theme.colors.text }}>‹</Text></Pressable> : null}
        <View>
          <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
          {subtitle ? <Text style={[styles.subtitle, { color: theme.colors.mutedText }]}>{subtitle}</Text> : null}
        </View>
      </View>
      {right}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12 },
  left: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 },
  back: { width: 36, height: 36, borderWidth: 1, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '900' },
  subtitle: { marginTop: 2, fontSize: 13 }
});
