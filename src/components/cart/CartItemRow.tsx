import React from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CartItem, Product } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import { formatMoney } from '@/utils/format';
import { getDiscountedPrice } from '@/utils/calculations';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';

type Props = { item: CartItem; product: Product };

export const CartItemRow = ({ item, product }: Props) => {
  const theme = useTheme();
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const saveForLater = useCartStore((state) => state.saveForLater);
  const variant = item.variantId ? product.variants.find((candidate) => candidate.id === item.variantId) : undefined;
  return (
    <View style={[styles.row, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}>
      <Image source={{ uri: product.images[0] }} style={[styles.image, { borderRadius: theme.radius.md }]} contentFit="cover" />
      <View style={styles.content}>
        <Text numberOfLines={2} style={[styles.name, { color: theme.colors.text }]}>{product.name}</Text>
        <Text style={[styles.meta, { color: theme.colors.mutedText }]}>{variant?.name ?? product.brand}</Text>
        <Text style={[styles.price, { color: theme.colors.text }]}>{formatMoney(getDiscountedPrice(product), product.currency)}</Text>
        <View style={styles.controls}>
          <Pressable onPress={() => updateQuantity(item.id, item.quantity - 1)} style={[styles.stepper, { borderColor: theme.colors.border }]}><Text style={{ color: theme.colors.text }}>−</Text></Pressable>
          <Text style={[styles.quantity, { color: theme.colors.text }]}>{item.quantity}</Text>
          <Pressable onPress={() => updateQuantity(item.id, item.quantity + 1)} style={[styles.stepper, { borderColor: theme.colors.border }]}><Text style={{ color: theme.colors.text }}>+</Text></Pressable>
        </View>
        <View style={styles.actions}>
          <Button title={item.savedForLater ? 'Move to cart' : 'Save for later'} variant="ghost" onPress={() => saveForLater(item.id, !item.savedForLater)} style={styles.smallButton} />
          <Button title="Remove" variant="danger" onPress={() => removeItem(item.id)} style={styles.smallButton} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { borderWidth: 1, padding: 10, flexDirection: 'row', gap: 12 },
  image: { width: 88, height: 88, backgroundColor: '#E2E8F0' },
  content: { flex: 1, gap: 5 },
  name: { fontSize: 15, fontWeight: '900' },
  meta: { fontSize: 12 },
  price: { fontSize: 15, fontWeight: '900' },
  controls: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  stepper: { width: 28, height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 14 },
  quantity: { fontSize: 14, fontWeight: '900' },
  actions: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  smallButton: { minHeight: 34, paddingHorizontal: 10 }
});
