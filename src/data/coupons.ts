import { Coupon } from '@/types';

export const coupons: Coupon[] = [
  { code: 'WELCOME10', title: '10% off first order', type: 'percent', value: 10, minOrderValue: 50, expiresAt: '2027-12-31', active: true },
  { code: 'SAVE25', title: '$25 off big carts', type: 'fixed', value: 25, minOrderValue: 250, expiresAt: '2027-06-30', active: true },
  { code: 'FREESHIP', title: 'Shipping credit', type: 'fixed', value: 8, minOrderValue: 80, expiresAt: '2027-03-31', active: true },
  { code: 'VIP15', title: 'VIP member discount', type: 'percent', value: 15, minOrderValue: 150, expiresAt: '2027-10-10', active: true },
  { code: 'EXPIRED20', title: 'Expired campaign', type: 'percent', value: 20, minOrderValue: 100, expiresAt: '2024-01-01', active: false }
];
