import React from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { router } from 'expo-router';
import { Product } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import { formatMoney } from '@/utils/format';
import { getDiscountedPrice } from '@/utils/calculations';
import { Button } from '@/components/ui/Button';

type Props = { product: Product; actionLabel?: string; onAction?: () => void; style?: StyleProp<ViewStyle> };

export const ProductRow = ({ product, actionLabel, onAction, style }: Props) => {
  const theme = useTheme();
  return (
    <Pressable onPress={() => router.push(`/product/${product.id}`)} style={[styles.row, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }, style]}>
      <Image source={{ uri: product.images[0] }} style={[styles.image, { borderRadius: theme.radius.md }]} contentFit="cover" />
      <View style={styles.content}>
        <Text numberOfLines={2} style={[styles.name, { color: theme.colors.text }]}>{product.name}</Text>
        <Text style={[styles.meta, { color: theme.colors.mutedText }]}>{product.brand} • {product.rating} ★</Text>
        <Text style={[styles.price, { color: theme.colors.text }]}>{formatMoney(getDiscountedPrice(product), product.currency)}</Text>
        {actionLabel ? <Button title={actionLabel} onPress={onAction} style={styles.button} /> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: { borderWidth: 1, padding: 10, flexDirection: 'row', gap: 12 },
  image: { width: 86, height: 86, backgroundColor: '#E2E8F0' },
  content: { flex: 1, gap: 5 },
  name: { fontSize: 15, fontWeight: '900' },
  meta: { fontSize: 12 },
  price: { fontSize: 15, fontWeight: '900' },
  button: { minHeight: 36, alignSelf: 'flex-start', paddingHorizontal: 14 }
});
