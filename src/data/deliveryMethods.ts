import { DeliveryMethod } from '@/types';

export const deliveryMethods: DeliveryMethod[] = [
  { id: 'standard', title: 'Standard Delivery', description: 'Reliable delivery to your doorstep.', fee: 6.99, days: '3-5 business days' },
  { id: 'express', title: 'Express Delivery', description: 'Priority packing and faster courier handoff.', fee: 14.99, days: '1-2 business days' },
  { id: 'pickup', title: 'Store Pickup', description: 'Pick your order from the nearest partner store.', fee: 0, days: 'Same day' }
];
