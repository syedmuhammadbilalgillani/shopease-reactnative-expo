import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { addresses as initialAddresses, paymentMethods as initialPaymentMethods } from '@/data/users';
import { Address, PaymentMethod } from '@/types';
import { makeId } from '@/utils/format';

export type CustomerState = {
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  addPaymentMethod: (method: Omit<PaymentMethod, 'id'>) => void;
  deletePaymentMethod: (id: string) => void;
};

export const useCustomerStore = create<CustomerState>()(
  persist(
    (set) => ({
      addresses: initialAddresses,
      paymentMethods: initialPaymentMethods,
      addAddress: (address) => set((state) => ({ addresses: [{ ...address, id: makeId('addr') }, ...state.addresses] })),
      updateAddress: (id, address) => set((state) => ({ addresses: state.addresses.map((item) => item.id === id ? { ...item, ...address } : item) })),
      deleteAddress: (id) => set((state) => ({ addresses: state.addresses.filter((item) => item.id !== id) })),
      addPaymentMethod: (method) => set((state) => ({ paymentMethods: [{ ...method, id: makeId('pay') }, ...state.paymentMethods] })),
      deletePaymentMethod: (id) => set((state) => ({ paymentMethods: state.paymentMethods.filter((item) => item.id !== id) }))
    }),
    { name: 'shopease-customer', storage: createJSONStorage(() => AsyncStorage) }
  )
);
