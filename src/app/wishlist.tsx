import React from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { EmptyState } from '@/components/ui/EmptyState';
import { ProductRow } from '@/components/product/ProductRow';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCatalogStore } from '@/store/catalogStore';
import { useCartStore } from '@/store/cartStore';

export default function WishlistScreen() {
  const ids = useWishlistStore((state) => state.productIds);
  const remove = useWishlistStore((state) => state.removeFromWishlist);
  const addItem = useCartStore((state) => state.addItem);
  const products = useCatalogStore((state) => state.products).filter((product) => ids.includes(product.id));
  return (
    <Screen>
      <Header title="Wishlist" subtitle="Save products and move them to cart" showBack />
      {!products.length ? <EmptyState title="Wishlist is empty" message="Tap the heart on any product to save it." actionLabel="Browse products" onAction={() => router.push('/(tabs)')} /> : <View style={styles.list}>{products.map((product) => <ProductRow key={product.id} product={product} actionLabel="Move to cart" onAction={() => { addItem(product.id); remove(product.id); }} />)}</View>}
    </Screen>
  );
}

const styles = StyleSheet.create({ list: { gap: 12 } });
