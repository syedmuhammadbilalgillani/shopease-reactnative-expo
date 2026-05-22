import { mockDelay } from './mockApi';

export const paymentService = {
  process: async (methodType: 'card' | 'wallet' | 'cod', amount: number) => {
    const approved = methodType === 'cod' || methodType === 'wallet' || amount < 5000;
    return mockDelay({ approved, transactionId: approved ? `txn-${Date.now()}` : undefined, message: approved ? 'Payment approved.' : 'Payment failed in mock gateway.' }, false, 600);
  }
};
