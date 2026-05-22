import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { router, useLocalSearchParams } from 'expo-router';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';
import { z } from 'zod';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { ControlledInput } from '@/components/forms/ControlledInput';
import { productSchema } from '@/utils/validators';
import { categories } from '@/data/categories';
import { useCatalogStore } from '@/store/catalogStore';
import { useTheme } from '@/hooks/useTheme';

type FormValues = z.infer<typeof productSchema>;

export default function ProductEditorScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const theme = useTheme();
  const product = useCatalogStore((state) => state.products.find((item) => item.id === id));
  const addProduct = useCatalogStore((state) => state.addProduct);
  const updateProduct = useCatalogStore((state) => state.updateProduct);
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: { name: product?.name ?? '', price: product?.price ?? 25, stock: product?.stock ?? 10, brand: product?.brand ?? 'ShopEase Brand', categoryId: product?.categoryId ?? categories[0].id }
  });
  const submit = (values: FormValues) => {
    if (product) updateProduct(product.id, values);
    else addProduct({ ...values, subcategory: 'Admin', images: [`https://picsum.photos/seed/${values.name}/900/900`] });
    router.back();
  };
  return (
    <Screen contentStyle={styles.container}>
      <Header title={product ? 'Edit product' : 'Add product'} showBack />
      <Text style={[styles.help, { color: theme.colors.mutedText }]}>Category IDs available: {categories.map((item) => item.id).join(', ')}</Text>
      <ControlledInput control={control} name="name" label="Product name" />
      <ControlledInput control={control} name="price" label="Price" keyboardType="numeric" />
      <ControlledInput control={control} name="stock" label="Stock" keyboardType="numeric" />
      <ControlledInput control={control} name="brand" label="Brand" />
      <ControlledInput control={control} name="categoryId" label="Category ID" />
      <Button title={product ? 'Save changes' : 'Create product'} onPress={handleSubmit(submit)} />
    </Screen>
  );
}

const styles = StyleSheet.create({ container: { gap: 14 }, help: { fontSize: 12, lineHeight: 18 } });
