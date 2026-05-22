import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { CartItem } from '@/types';
import { makeId } from '@/utils/format';

export type CartState = {
  items: CartItem[];
  couponCode?: string;
  addItem: (productId: string, quantity?: number, variantId?: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  saveForLater: (itemId: string, savedForLater: boolean) => void;
  applyCoupon: (code?: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      couponCode: undefined,
      addItem: (productId, quantity = 1, variantId) => set((state) => {
        const existing = state.items.find((item) => item.productId === productId && item.variantId === variantId && !item.savedForLater);
        if (existing) {
          return { items: state.items.map((item) => item.id === existing.id ? { ...item, quantity: item.quantity + quantity } : item) };
        }
        return { items: [{ id: makeId('cart'), productId, quantity, variantId }, ...state.items] };
      }),
      updateQuantity: (itemId, quantity) => set((state) => ({
        items: state.items.map((item) => item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item)
      })),
      removeItem: (itemId) => set((state) => ({ items: state.items.filter((item) => item.id !== itemId) })),
      saveForLater: (itemId, savedForLater) => set((state) => ({
        items: state.items.map((item) => item.id === itemId ? { ...item, savedForLater } : item)
      })),
      applyCoupon: (code) => set({ couponCode: code?.toUpperCase() }),
      clearCart: () => set({ items: [], couponCode: undefined })
    }),
    { name: 'shopease-cart', storage: createJSONStorage(() => AsyncStorage) }
  )
);
