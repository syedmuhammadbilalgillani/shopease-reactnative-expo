import React, { useState } from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { TextInputField } from '@/components/ui/TextInput';
import { useCatalogStore } from '@/store/catalogStore';
import { useTheme } from '@/hooks/useTheme';
import { formatMoney } from '@/utils/format';

export default function AdminProductsScreen() {
  const theme = useTheme();
  const [query, setQuery] = useState('');
  const products = useCatalogStore((state) => state.products).filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  const deleteProduct = useCatalogStore((state) => state.deleteProduct);
  return (
    <Screen>
      <Header title="Product management" showBack right={<Button title="Add" onPress={() => router.push('/admin/product-editor')} style={styles.add} />} />
      <TextInputField placeholder="Search products" value={query} onChangeText={setQuery} />
      <View style={styles.list}>{products.slice(0, 60).map((product) => <View key={product.id} style={[styles.row, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.md }]}><Pressable onPress={() => router.push(`/admin/product-editor?id=${product.id}`)} style={styles.info}><Text style={[styles.name, { color: theme.colors.text }]}>{product.name}</Text><Text style={[styles.meta, { color: theme.colors.mutedText }]}>{product.brand} • Stock {product.stock} • {formatMoney(product.price)}</Text></Pressable><Pressable onPress={() => deleteProduct(product.id)}><Text style={{ color: theme.colors.danger, fontWeight: '900' }}>Delete</Text></Pressable></View>)}</View>
    </Screen>
  );
}

const styles = StyleSheet.create({ add: { minHeight: 38, paddingHorizontal: 14 }, list: { gap: 8, marginTop: 12 }, row: { borderWidth: 1, padding: 12, flexDirection: 'row', gap: 12, alignItems: 'center' }, info: { flex: 1 }, name: { fontSize: 14, fontWeight: '900' }, meta: { fontSize: 12, marginTop: 3 } });
