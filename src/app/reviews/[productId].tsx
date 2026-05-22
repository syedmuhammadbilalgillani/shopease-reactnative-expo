import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalSearchParams } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { z } from 'zod';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { StarRating } from '@/components/ui/StarRating';
import { ControlledInput } from '@/components/forms/ControlledInput';
import { reviewSchema } from '@/utils/validators';
import { makeId } from '@/utils/format';
import { useTheme } from '@/hooks/useTheme';
import { useCatalogStore } from '@/store/catalogStore';
import { useAuthStore } from '@/store/authStore';

type FormValues = z.infer<typeof reviewSchema>;

export default function ReviewsScreen() {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const product = useCatalogStore((state) => state.products.find((item) => item.id === productId));
  const addReview = useCatalogStore((state) => state.addReview);
  const updateProduct = useCatalogStore((state) => state.updateProduct);
  const { control, handleSubmit, reset } = useForm<FormValues>({ resolver: zodResolver(reviewSchema), defaultValues: { rating: 5, title: '', comment: '' } });
  if (!product) return <Screen><Header title="Reviews" showBack /><EmptyState title="Product not found" message="No reviews available." /></Screen>;
  const submit = (values: FormValues) => { addReview(product.id, { id: makeId('rev'), productId: product.id, userId: user?.id ?? 'guest', userName: user?.name ?? 'Guest User', rating: values.rating, title: values.title, comment: values.comment, images: ['mock-review-image.jpg'], createdAt: new Date().toISOString(), mine: true }); reset({ rating: 5, title: '', comment: '' }); };
  const deleteOwn = (id: string) => updateProduct(product.id, { reviews: product.reviews.filter((item) => item.id !== id), reviewCount: Math.max(0, product.reviewCount - 1) });
  return (
    <Screen>
      <Header title="Reviews" subtitle={product.name} showBack />
      <View style={[styles.form, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.xl }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Write a review</Text>
        <Controller control={control} name="rating" render={({ field: { value, onChange } }) => <StarRating value={value} onChange={onChange} size={26} />} />
        <ControlledInput control={control} name="title" label="Title" />
        <ControlledInput control={control} name="comment" label="Comment" multiline style={styles.textArea} />
        <Button title="Submit review" onPress={handleSubmit(submit)} />
      </View>
      {product.reviews.map((review) => <View key={review.id} style={[styles.review, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.lg }]}>
        <View style={styles.row}><StarRating value={review.rating} /><Text style={[styles.name, { color: theme.colors.text }]}>{review.userName}</Text></View>
        <Text style={[styles.reviewTitle, { color: theme.colors.text }]}>{review.title}</Text>
        <Text style={[styles.comment, { color: theme.colors.mutedText }]}>{review.comment}</Text>
        {review.mine ? <View style={styles.actions}><Pressable><Text style={{ color: theme.colors.primary, fontWeight: '900' }}>Edit</Text></Pressable><Pressable onPress={() => deleteOwn(review.id)}><Text style={{ color: theme.colors.danger, fontWeight: '900' }}>Delete</Text></Pressable></View> : null}
      </View>)}
    </Screen>
  );
}

const styles = StyleSheet.create({
  form: { borderWidth: 1, padding: 14, gap: 12, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: '900' },
  textArea: { minHeight: 90, textAlignVertical: 'top', paddingTop: 12 },
  review: { borderWidth: 1, padding: 13, gap: 6, marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  name: { fontSize: 13, fontWeight: '800' },
  reviewTitle: { fontSize: 15, fontWeight: '900' },
  comment: { fontSize: 13, lineHeight: 19 },
  actions: { flexDirection: 'row', gap: 16, marginTop: 4 }
});
