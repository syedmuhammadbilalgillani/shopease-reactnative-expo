import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { TextInputField } from '@/components/ui/TextInput';
import { ProductListView } from '@/components/product/ProductListView';
import { useTheme } from '@/hooks/useTheme';
import { useAppStore } from '@/store/appStore';

const popular = ['sneakers', 'wireless earbuds', 'serum', 'backpack', 'watch'];

export default function SearchScreen() {
  const theme = useTheme();
  const recentSearches = useAppStore((state) => state.recentSearches);
  const addRecentSearch = useAppStore((state) => state.addRecentSearch);
  const [query, setQuery] = useState('');
  const submit = (value: string) => { setQuery(value); addRecentSearch(value); };
  return (
    <Screen>
      <Header title="Search" showBack />
      <TextInputField placeholder="Search products" value={query} onChangeText={setQuery} onSubmitEditing={() => submit(query)} returnKeyType="search" />
      {!query ? <View style={styles.block}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Recent searches</Text>
        <View style={styles.chips}>{recentSearches.map((item) => <Pressable key={item} onPress={() => submit(item)} style={[styles.chip, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: theme.colors.text }]}>{item}</Text></Pressable>)}</View>
        <Text style={[styles.title, { color: theme.colors.text }]}>Popular searches</Text>
        <View style={styles.chips}>{popular.map((item) => <Pressable key={item} onPress={() => submit(item)} style={[styles.chip, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}><Text style={[styles.chipText, { color: theme.colors.text }]}>{item}</Text></Pressable>)}</View>
      </View> : null}
      <ProductListView initialFilters={{ query }} showSearch={false} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  block: { gap: 10, marginVertical: 12 },
  title: { fontSize: 17, fontWeight: '900' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderWidth: 1, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 999 },
  chipText: { fontSize: 12, fontWeight: '800' }
});
