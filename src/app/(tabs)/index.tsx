import React from 'react';
import { Image } from 'expo-image';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { TextInputField } from '@/components/ui/TextInput';
import { ProductCard } from '@/components/product/ProductCard';
import { categories } from '@/data/categories';
import { useAuthStore } from '@/store/authStore';
import { useCatalogStore } from '@/store/catalogStore';
import { useTheme } from '@/hooks/useTheme';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const theme = useTheme();
  return <View style={styles.section}><Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{title}</Text>{children}</View>;
};

export default function HomeScreen() {
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const products = useCatalogStore((state) => state.products);
  const recentIds = useCatalogStore((state) => state.recentlyViewed);
  const featured = products.filter((product) => product.isFeatured).slice(0, 10);
  const best = products.filter((product) => product.isBestSeller).slice(0, 10);
  const newArrivals = products.filter((product) => product.isNewArrival).slice(0, 10);
  const recommended = products.filter((product) => product.rating >= 4.5).slice(0, 10);
  const recent = recentIds.map((id) => products.find((product) => product.id === id)).filter(Boolean).slice(0, 8) as typeof products;

  const renderProducts = (items: typeof products) => <FlatList horizontal showsHorizontalScrollIndicator={false} data={items} keyExtractor={(item) => item.id} contentContainerStyle={styles.horizontalList} renderItem={({ item }) => <ProductCard product={item} />} />;

  return (
    <Screen>
      <Header
        title={`Hi ${user?.name?.split(' ')[0] ?? 'Guest'}`}
        subtitle={user?.location ?? 'Set your shopping location'}
        right={<Pressable onPress={() => router.push('/notifications')} style={[styles.circle, { backgroundColor: theme.colors.surface }]}><Text>🔔</Text></Pressable>}
      />
      <Pressable onPress={() => router.push('/search')}><TextInputField editable={false} pointerEvents="none" placeholder="Search products, brands, categories" /></Pressable>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} keyExtractor={(item) => item.id} contentContainerStyle={styles.categoryList} renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`/categories/${item.id}`)} style={[styles.categoryCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}>
          <Text style={styles.categoryIcon}>{item.icon}</Text>
          <Text style={[styles.categoryName, { color: theme.colors.text }]}>{item.name}</Text>
        </Pressable>
      )} />
      <View style={[styles.banner, { backgroundColor: theme.colors.primary, borderRadius: theme.radius.xl }]}>
        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>Mega Deals Week</Text>
          <Text style={styles.bannerBody}>Up to 20% off selected electronics, fashion, and home essentials.</Text>
        </View>
        <Image source={{ uri: 'https://picsum.photos/seed/shopease-banner/500/500' }} style={styles.bannerImage} contentFit="cover" />
      </View>
      <Section title="Featured products">{renderProducts(featured)}</Section>
      <Section title="Best sellers">{renderProducts(best)}</Section>
      <Section title="New arrivals">{renderProducts(newArrivals)}</Section>
      <Section title="Recommended for you">{renderProducts(recommended)}</Section>
      {recent.length ? <Section title="Recently viewed">{renderProducts(recent)}</Section> : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  circle: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  categoryList: { gap: 10, paddingVertical: 14 },
  categoryCard: { width: 92, borderWidth: 1, alignItems: 'center', padding: 12, gap: 7 },
  categoryIcon: { fontSize: 26 },
  categoryName: { fontSize: 12, fontWeight: '900', textAlign: 'center' },
  banner: { marginVertical: 4, minHeight: 150, flexDirection: 'row', overflow: 'hidden' },
  bannerText: { flex: 1, padding: 18, justifyContent: 'center', gap: 6 },
  bannerTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: '900' },
  bannerBody: { color: '#DBEAFE', fontSize: 13, lineHeight: 19 },
  bannerImage: { width: 130, height: '100%' },
  section: { marginTop: 18, gap: 10 },
  sectionTitle: { fontSize: 20, fontWeight: '900' },
  horizontalList: { gap: 12, paddingRight: 16 }
});
