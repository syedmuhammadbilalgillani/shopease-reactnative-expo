import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { products as initialProducts } from '@/data/products';
import { Product, Review } from '@/types';
import { makeId } from '@/utils/format';

export type CatalogState = {
  products: Product[];
  recentlyViewed: string[];
  addRecentlyViewed: (productId: string) => void;
  addProduct: (payload: Pick<Product, 'name' | 'price' | 'stock' | 'brand' | 'categoryId'> & Partial<Product>) => void;
  updateProduct: (productId: string, payload: Partial<Product>) => void;
  deleteProduct: (productId: string) => void;
  decrementStock: (items: { productId: string; quantity: number; variantId?: string }[]) => void;
  addReview: (productId: string, review: Review) => void;
};

export const useCatalogStore = create<CatalogState>()(
  persist(
    (set) => ({
      products: initialProducts,
      recentlyViewed: [],
      addRecentlyViewed: (productId) => set((state) => ({
        recentlyViewed: [productId, ...state.recentlyViewed.filter((id) => id !== productId)].slice(0, 12)
      })),
      addProduct: (payload) => set((state) => {
        const product: Product = {
          id: makeId('prod'),
          sku: `SE-ADM-${Date.now()}`,
          slug: payload.name.toLowerCase().replace(/\s+/g, '-'),
          subcategory: payload.subcategory ?? 'General',
          images: payload.images?.length ? payload.images : [`https://picsum.photos/seed/${Date.now()}/900/900`],
          compareAtPrice: payload.compareAtPrice,
          discountPercent: payload.discountPercent ?? 0,
          rating: payload.rating ?? 4.2,
          reviewCount: payload.reviewCount ?? 0,
          description: payload.description ?? 'Locally managed product created in the business demo panel.',
          specifications: payload.specifications ?? { Brand: payload.brand, Warranty: '12 months' },
          variants: payload.variants ?? [],
          tags: payload.tags ?? ['admin', payload.brand.toLowerCase()],
          currency: payload.currency ?? 'USD',
          isFeatured: payload.isFeatured ?? false,
          isBestSeller: payload.isBestSeller ?? false,
          isNewArrival: payload.isNewArrival ?? true,
          sold: payload.sold ?? 0,
          createdAt: new Date().toISOString(),
          reviews: [],
          ...payload
        };
        return { products: [product, ...state.products] };
      }),
      updateProduct: (productId, payload) => set((state) => ({
        products: state.products.map((product) => product.id === productId ? { ...product, ...payload } : product)
      })),
      deleteProduct: (productId) => set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),
      decrementStock: (items) => set((state) => ({
        products: state.products.map((product) => {
          const item = items.find((candidate) => candidate.productId === product.id);
          if (!item) return product;
          return {
            ...product,
            stock: Math.max(0, product.stock - item.quantity),
            sold: product.sold + item.quantity,
            variants: product.variants.map((variant) => variant.id === item.variantId ? { ...variant, stock: Math.max(0, variant.stock - item.quantity) } : variant)
          };
        })
      })),
      addReview: (productId, review) => set((state) => ({
        products: state.products.map((product) => product.id === productId ? {
          ...product,
          reviews: [review, ...product.reviews],
          reviewCount: product.reviewCount + 1,
          rating: Number(((product.rating * product.reviewCount + review.rating) / (product.reviewCount + 1)).toFixed(1))
        } : product)
      }))
    }),
    { name: 'shopease-catalog', storage: createJSONStorage(() => AsyncStorage) }
  )
);
