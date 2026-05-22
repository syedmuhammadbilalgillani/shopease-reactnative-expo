import { CurrencyCode } from '@/types';

const currencyMap: Record<CurrencyCode, string> = {
  USD: 'en-US',
  EUR: 'de-DE',
  GBP: 'en-GB',
  PKR: 'en-PK'
};

export const formatMoney = (amount: number, currency: CurrencyCode = 'USD') =>
  new Intl.NumberFormat(currencyMap[currency], { style: 'currency', currency }).format(amount);

export const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value));

export const makeId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
