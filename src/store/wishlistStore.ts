import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type WishlistState = {
  productIds: string[];
  toggleWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      productIds: [],
      toggleWishlist: (productId) => set((state) => ({
        productIds: state.productIds.includes(productId)
          ? state.productIds.filter((id) => id !== productId)
          : [productId, ...state.productIds]
      })),
      removeFromWishlist: (productId) => set((state) => ({ productIds: state.productIds.filter((id) => id !== productId) })),
      isWishlisted: (productId) => get().productIds.includes(productId)
    }),
    { name: 'shopease-wishlist', storage: createJSONStorage(() => AsyncStorage) }
  )
);
