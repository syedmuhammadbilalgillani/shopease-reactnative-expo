import { Notification } from '@/types';

export const notifications: Notification[] = [
  { id: 'notif-1', userId: 'user-1', type: 'promotion', title: 'Weekend sale is live', body: 'Use WELCOME10 for selected fashion, beauty, and home products.', read: false, createdAt: '2026-05-20T09:00:00Z' },
  { id: 'notif-2', userId: 'user-1', type: 'order', title: 'Order SE-10018 shipped', body: 'Your order is on the way and will arrive soon.', read: false, createdAt: '2026-05-18T16:30:00Z' },
  { id: 'notif-3', userId: 'user-1', type: 'system', title: 'New address added', body: 'Your office address was saved successfully.', read: true, createdAt: '2026-05-15T10:15:00Z' },
  { id: 'notif-4', userId: 'user-1', type: 'promotion', title: 'Low stock alert', body: 'Items in your wishlist are selling fast.', read: false, createdAt: '2026-05-14T08:00:00Z' },
  { id: 'notif-5', userId: 'user-2', type: 'order', title: 'Order confirmed', body: 'Your ShopEase order is confirmed and being prepared.', read: false, createdAt: '2026-05-12T13:00:00Z' }
];
