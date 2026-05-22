import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ProductFilters, ProductSort } from '@/types';
import { useProducts } from '@/hooks/useProducts';
import { useTheme } from '@/hooks/useTheme';
import { brands } from '@/data/brands';
import { categories } from '@/data/categories';
import { ProductCard } from './ProductCard';
import { ProductRow } from './ProductRow';
import { EmptyState } from '@/components/ui/EmptyState';
import { LoadingState } from '@/components/ui/LoadingState';
import { TextInputField } from '@/components/ui/TextInput';
import { Button } from '@/components/ui/Button';

const sortOptions: { label: string; value: ProductSort }[] = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price ↑', value: 'price_asc' },
  { label: 'Price ↓', value: 'price_desc' },
  { label: 'Best rated', value: 'rating' },
  { label: 'Best selling', value: 'best_selling' }
];

type Props = {
  initialFilters?: ProductFilters;
  showSearch?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const ProductListView = ({ initialFilters, showSearch = true, style }: Props) => {
  const theme = useTheme();
  const [query, setQuery] = useState(initialFilters?.query ?? '');
  const [sort, setSort] = useState<ProductSort>('newest');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [brand, setBrand] = useState(initialFilters?.brand);
  const [categoryId, setCategoryId] = useState(initialFilters?.categoryId);
  const [discountOnly, setDiscountOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const filters = useMemo<ProductFilters>(() => ({ ...initialFilters, query, brand, categoryId, discountOnly, inStockOnly }), [initialFilters, query, brand, categoryId, discountOnly, inStockOnly]);
  const { data = [], isLoading } = useProducts(filters, sort);

  if (isLoading) return <LoadingState />;

  return (
    <View style={[styles.container, style]}>
      {showSearch ? <TextInputField placeholder="Search products" value={query} onChangeText={setQuery} /> : null}
      <View style={styles.topRow}>
        <Text style={[styles.count, { color: theme.colors.text }]}>{data.length} products</Text>
        <Button title={view === 'grid' ? 'List' : 'Grid'} variant="ghost" onPress={() => setView(view === 'grid' ? 'list' : 'grid')} style={styles.viewButton} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
        {sortOptions.map((option) => <Pressable key={option.value} onPress={() => setSort(option.value)} style={[styles.chip, { backgroundColor: sort === option.value ? theme.colors.primary : theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: sort === option.value ? '#FFFFFF' : theme.colors.text }]}>{option.label}</Text></Pressable>)}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
        <Pressable onPress={() => setCategoryId(undefined)} style={[styles.chip, { backgroundColor: !categoryId ? theme.colors.primary : theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: !categoryId ? '#FFFFFF' : theme.colors.text }]}>All categories</Text></Pressable>
        {categories.map((category) => <Pressable key={category.id} onPress={() => setCategoryId(category.id)} style={[styles.chip, { backgroundColor: categoryId === category.id ? theme.colors.primary : theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: categoryId === category.id ? '#FFFFFF' : theme.colors.text }]}>{category.name}</Text></Pressable>)}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
        <Pressable onPress={() => setBrand(undefined)} style={[styles.chip, { backgroundColor: !brand ? theme.colors.primary : theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: !brand ? '#FFFFFF' : theme.colors.text }]}>All brands</Text></Pressable>
        {brands.map((item) => <Pressable key={item} onPress={() => setBrand(item)} style={[styles.chip, { backgroundColor: brand === item ? theme.colors.primary : theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: brand === item ? '#FFFFFF' : theme.colors.text }]}>{item}</Text></Pressable>)}
        <Pressable onPress={() => setDiscountOnly(!discountOnly)} style={[styles.chip, { backgroundColor: discountOnly ? theme.colors.primary : theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: discountOnly ? '#FFFFFF' : theme.colors.text }]}>Discount</Text></Pressable>
        <Pressable onPress={() => setInStockOnly(!inStockOnly)} style={[styles.chip, { backgroundColor: inStockOnly ? theme.colors.primary : theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: inStockOnly ? '#FFFFFF' : theme.colors.text }]}>In stock</Text></Pressable>
      </ScrollView>
      {data.length === 0 ? <EmptyState title="No products found" message="Adjust search or filters to find matching products." /> : (
        <FlatList
          data={data}
          key={view}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          numColumns={view === 'grid' ? 2 : 1}
          columnWrapperStyle={view === 'grid' ? styles.gridRow : undefined}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => view === 'grid' ? <ProductCard product={item} style={styles.gridCard} /> : <ProductRow product={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 12 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  count: { fontSize: 15, fontWeight: '900' },
  viewButton: { minHeight: 36, paddingHorizontal: 12 },
  chips: { gap: 8, paddingVertical: 2 },
  chip: { borderWidth: 1, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999 },
  chipText: { fontSize: 12, fontWeight: '800' },
  gridRow: { gap: 12 },
  gridCard: { flex: 1, width: 'auto' },
  separator: { height: 12 }
});
