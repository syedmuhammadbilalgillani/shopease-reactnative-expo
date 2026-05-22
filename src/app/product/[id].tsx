import React, { useEffect, useMemo, useState } from 'react';
import { Image } from 'expo-image';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/EmptyState';
import { ProductCard } from '@/components/product/ProductCard';
import { StarRating } from '@/components/ui/StarRating';
import { useTheme } from '@/hooks/useTheme';
import { useCatalogStore } from '@/store/catalogStore';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { formatMoney } from '@/utils/format';
import { getDiscountedPrice } from '@/utils/calculations';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const products = useCatalogStore((state) => state.products);
  const addRecentlyViewed = useCatalogStore((state) => state.addRecentlyViewed);
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const wished = useWishlistStore((state) => state.productIds.includes(id ?? ''));
  const product = products.find((item) => item.id === id);
  const [image, setImage] = useState(product?.images[0]);
  const [variantId, setVariantId] = useState(product?.variants[0]?.id);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => { if (id) addRecentlyViewed(id); }, [id, addRecentlyViewed]);

  const similar = useMemo(() => product ? products.filter((item) => item.categoryId === product.categoryId && item.id !== product.id).slice(0, 8) : [], [product, products]);
  const related = useMemo(() => product ? products.filter((item) => item.brand === product.brand && item.id !== product.id).slice(0, 8) : [], [product, products]);

  if (!product) return <Screen><Header title="Product" showBack /><EmptyState title="Product not found" message="This product is unavailable." /></Screen>;

  const selectedVariant = product.variants.find((variant) => variant.id === variantId);
  const available = selectedVariant?.stock ?? product.stock;
  const salePrice = getDiscountedPrice(product);
  const add = () => addItem(product.id, quantity, variantId);

  return (
    <Screen>
      <Header title="Product detail" showBack right={<Pressable onPress={() => toggleWishlist(product.id)} style={[styles.round, { backgroundColor: theme.colors.surface }]}><Text style={{ color: wished ? theme.colors.danger : theme.colors.text }}>{wished ? '♥' : '♡'}</Text></Pressable>} />
      <Image source={{ uri: image ?? product.images[0] }} style={[styles.hero, { borderRadius: theme.radius.xl }]} contentFit="cover" />
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={product.images} keyExtractor={(item) => item} contentContainerStyle={styles.thumbs} renderItem={({ item }) => <Pressable onPress={() => setImage(item)}><Image source={{ uri: item }} style={[styles.thumb, { borderRadius: theme.radius.md, borderColor: (image ?? product.images[0]) === item ? theme.colors.primary : theme.colors.border }]} /></Pressable>} />
      <View style={styles.row}><Badge label={available > 0 ? `${available} in stock` : 'Out of stock'} tone={available > 0 ? 'success' : 'danger'} />{product.discountPercent ? <Badge label={`${product.discountPercent}% OFF`} tone="warning" /> : null}</View>
      <Text style={[styles.title, { color: theme.colors.text }]}>{product.name}</Text>
      <View style={styles.rating}><StarRating value={product.rating} /><Text style={[styles.meta, { color: theme.colors.mutedText }]}>{product.rating} • {product.reviewCount} reviews</Text></View>
      <View style={styles.priceRow}><Text style={[styles.price, { color: theme.colors.text }]}>{formatMoney(salePrice)}</Text>{product.discountPercent ? <Text style={[styles.compare, { color: theme.colors.mutedText }]}>{formatMoney(product.price)}</Text> : null}</View>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Description</Text>
      <Text style={[styles.description, { color: theme.colors.mutedText }]}>{product.description}</Text>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Variants</Text>
      <View style={styles.variants}>{product.variants.map((variant) => <Pressable key={variant.id} onPress={() => setVariantId(variant.id)} style={[styles.variant, { backgroundColor: variantId === variant.id ? theme.colors.primary : theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.variantText, { color: variantId === variant.id ? '#FFFFFF' : theme.colors.text }]}>{variant.name}</Text></Pressable>)}</View>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quantity</Text>
      <View style={styles.qty}><Button title="−" variant="ghost" onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.qtyButton} /><Text style={[styles.qtyText, { color: theme.colors.text }]}>{quantity}</Text><Button title="+" variant="ghost" onPress={() => setQuantity(Math.min(available, quantity + 1))} style={styles.qtyButton} /></View>
      <View style={styles.actions}><Button title="Add to cart" disabled={available === 0} onPress={add} style={styles.action} /><Button title="Buy now" disabled={available === 0} variant="secondary" onPress={() => { add(); router.push('/checkout'); }} style={styles.action} /></View>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Specifications</Text>
      {Object.entries(product.specifications).map(([key, value]) => <View key={key} style={[styles.spec, { borderColor: theme.colors.border }]}><Text style={[styles.specKey, { color: theme.colors.mutedText }]}>{key}</Text><Text style={[styles.specValue, { color: theme.colors.text }]}>{value}</Text></View>)}
      <View style={styles.reviewsHeader}><Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Reviews</Text><Button title="Add review" variant="ghost" onPress={() => router.push(`/reviews/${product.id}`)} style={styles.reviewButton} /></View>
      {product.reviews.slice(0, 3).map((review) => <View key={review.id} style={[styles.review, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}><StarRating value={review.rating} /><Text style={[styles.reviewTitle, { color: theme.colors.text }]}>{review.title}</Text><Text style={[styles.description, { color: theme.colors.mutedText }]}>{review.comment}</Text></View>)}
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Similar products</Text>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={similar} keyExtractor={(item) => item.id} contentContainerStyle={styles.products} renderItem={({ item }) => <ProductCard product={item} />} />
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Related products</Text>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={related} keyExtractor={(item) => item.id} contentContainerStyle={styles.products} renderItem={({ item }) => <ProductCard product={item} />} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { height: 340, backgroundColor: '#E2E8F0' },
  thumbs: { gap: 8, paddingVertical: 10 },
  thumb: { width: 70, height: 70, borderWidth: 2 },
  round: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row', gap: 8, marginTop: 4 },
  title: { fontSize: 25, fontWeight: '900', marginTop: 10 },
  rating: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
  meta: { fontSize: 13 },
  priceRow: { flexDirection: 'row', alignItems: 'baseline', gap: 10, marginTop: 10 },
  price: { fontSize: 24, fontWeight: '900' },
  compare: { textDecorationLine: 'line-through', fontSize: 15 },
  sectionTitle: { fontSize: 18, fontWeight: '900', marginTop: 18, marginBottom: 8 },
  description: { fontSize: 14, lineHeight: 21 },
  variants: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  variant: { borderWidth: 1, paddingHorizontal: 12, paddingVertical: 9, borderRadius: 999 },
  variantText: { fontSize: 12, fontWeight: '900' },
  qty: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  qtyButton: { width: 44, minHeight: 40 },
  qtyText: { fontSize: 18, fontWeight: '900' },
  actions: { flexDirection: 'row', gap: 12, marginTop: 18 },
  action: { flex: 1 },
  spec: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, paddingVertical: 9, gap: 16 },
  specKey: { fontSize: 13, flex: 1 },
  specValue: { fontSize: 13, fontWeight: '800', flex: 1, textAlign: 'right' },
  reviewsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  reviewButton: { minHeight: 36 },
  review: { borderWidth: 1, padding: 12, gap: 5, marginBottom: 8 },
  reviewTitle: { fontSize: 14, fontWeight: '900' },
  products: { gap: 12, paddingRight: 16 }
});
