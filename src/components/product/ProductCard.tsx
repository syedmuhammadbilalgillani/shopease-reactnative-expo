import React from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { router } from 'expo-router';
import { Product } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import { formatMoney } from '@/utils/format';
import { getDiscountedPrice } from '@/utils/calculations';
import { useWishlistStore } from '@/store/wishlistStore';
import { Badge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';

type Props = { product: Product; compact?: boolean; style?: StyleProp<ViewStyle> };

export const ProductCard = ({ product, compact, style }: Props) => {
  const theme = useTheme();
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const wished = useWishlistStore((state) => state.productIds.includes(product.id));
  const salePrice = getDiscountedPrice(product);
  return (
    <Pressable onPress={() => router.push(`/product/${product.id}`)} style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }, style]}>
      <View>
        <Image source={{ uri: product.images[0] }} style={[styles.image, { borderRadius: theme.radius.md }, compact && styles.compactImage]} contentFit="cover" />
        {product.discountPercent > 0 ? <Badge label={`${product.discountPercent}% OFF`} style={styles.badge} /> : null}
        <Pressable onPress={() => toggleWishlist(product.id)} style={[styles.heart, { backgroundColor: theme.colors.surface }]}>
          <Text style={{ color: wished ? theme.colors.danger : theme.colors.mutedText }}>{wished ? '♥' : '♡'}</Text>
        </Pressable>
      </View>
      <Text numberOfLines={2} style={[styles.name, { color: theme.colors.text }]}>{product.name}</Text>
      <View style={styles.ratingRow}>
        <StarRating value={product.rating} />
        <Text style={[styles.ratingText, { color: theme.colors.mutedText }]}>{product.rating}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={[styles.price, { color: theme.colors.text }]}>{formatMoney(salePrice, product.currency)}</Text>
        {product.discountPercent ? <Text style={[styles.compare, { color: theme.colors.mutedText }]}>{formatMoney(product.price, product.currency)}</Text> : null}
      </View>
      <Text style={[styles.stock, { color: product.stock > 0 ? theme.colors.success : theme.colors.danger }]}>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: { width: 168, borderWidth: 1, padding: 10, gap: 7 },
  image: { height: 134, width: '100%', backgroundColor: '#E2E8F0' },
  compactImage: { height: 100 },
  badge: { position: 'absolute', left: 8, top: 8 },
  heart: { position: 'absolute', right: 8, top: 8, width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 14, fontWeight: '800', minHeight: 38 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  ratingText: { fontSize: 12, fontWeight: '700' },
  priceRow: { flexDirection: 'row', alignItems: 'baseline', gap: 7 },
  price: { fontSize: 15, fontWeight: '900' },
  compare: { fontSize: 12, textDecorationLine: 'line-through' },
  stock: { fontSize: 11, fontWeight: '800' }
});
