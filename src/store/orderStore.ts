import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { orders as initialOrders } from '@/data/orders';
import { Order } from '@/types';

export type OrderState = {
  orders: Order[];
  addOrder: (order: Order) => void;
  cancelOrder: (orderId: string) => void;
};

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      orders: initialOrders,
      addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
      cancelOrder: (orderId) => set((state) => ({
        orders: state.orders.map((order) => order.id === orderId ? {
          ...order,
          status: 'Cancelled',
          timeline: [...order.timeline, { status: 'Cancelled', date: new Date().toISOString(), note: 'Cancelled by customer.' }]
        } : order)
      }))
    }),
    { name: 'shopease-orders', storage: createJSONStorage(() => AsyncStorage) }
  )
);
