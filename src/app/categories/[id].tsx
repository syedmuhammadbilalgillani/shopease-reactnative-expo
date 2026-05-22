import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Text, StyleSheet, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { ProductListView } from '@/components/product/ProductListView';
import { categories } from '@/data/categories';
import { useTheme } from '@/hooks/useTheme';

export default function CategoryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const category = categories.find((item) => item.id === id);
  return (
    <Screen>
      <Header title={category?.name ?? 'Category'} subtitle={category?.description} showBack />
      {category ? <View style={styles.subs}>{category.subcategories.map((item) => <Text key={item} style={[styles.sub, { backgroundColor: theme.colors.surface, color: theme.colors.text, borderColor: theme.colors.border }]}>{item}</Text>)}</View> : null}
      <ProductListView initialFilters={{ categoryId: id }} showSearch={false} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  subs: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 12 },
  sub: { borderWidth: 1, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, fontSize: 12, fontWeight: '800' }
});
