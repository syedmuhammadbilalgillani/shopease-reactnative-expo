import React from 'react';
import { Image } from 'expo-image';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { categories } from '@/data/categories';
import { useTheme } from '@/hooks/useTheme';

export default function CategoriesScreen() {
  const theme = useTheme();
  return (
    <Screen>
      <Header title="Categories" subtitle="Browse by department and subcategory" />
      <FlatList
        scrollEnabled={false}
        data={categories}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/categories/${item.id}`)} style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.xl }]}>
            <Image source={{ uri: item.image }} style={[styles.image, { borderRadius: theme.radius.lg }]} contentFit="cover" />
            <View style={styles.content}>
              <Text style={[styles.title, { color: theme.colors.text }]}>{item.icon} {item.name}</Text>
              <Text numberOfLines={2} style={[styles.desc, { color: theme.colors.mutedText }]}>{item.description}</Text>
              <Text style={[styles.sub, { color: theme.colors.primary }]}>{item.subcategories.slice(0, 3).join(' • ')}</Text>
            </View>
          </Pressable>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, padding: 12, flexDirection: 'row', gap: 12 },
  image: { width: 92, height: 92, backgroundColor: '#E2E8F0' },
  content: { flex: 1, gap: 6 },
  title: { fontSize: 17, fontWeight: '900' },
  desc: { fontSize: 13, lineHeight: 18 },
  sub: { fontSize: 12, fontWeight: '900' },
  separator: { height: 12 }
});
