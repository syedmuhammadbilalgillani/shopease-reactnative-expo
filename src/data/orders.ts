import { Order } from '@/types';
import { products } from './products';
import { addresses, paymentMethods } from './users';
import { deliveryMethods } from './deliveryMethods';

const statuses = ['Pending', 'Confirmed', 'Packed', 'Shipped', 'Out for delivery', 'Delivered', 'Cancelled'] as const;

export const orders: Order[] = Array.from({ length: 22 }).map((_, index) => {
  const first = products[(index * 2) % products.length];
  const second = products[(index * 2 + 7) % products.length];
  const quantityOne = (index % 3) + 1;
  const quantityTwo = index % 2 === 0 ? 1 : 2;
  const items = [
    { productId: first.id, name: first.name, image: first.images[0], price: first.price, quantity: quantityOne, variantName: first.variants[0]?.name },
    { productId: second.id, name: second.name, image: second.images[0], price: second.price, quantity: quantityTwo, variantName: second.variants[0]?.name }
  ];
  const subtotal = Number(items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2));
  const discount = index % 4 === 0 ? Number((subtotal * 0.1).toFixed(2)) : 0;
  const shippingFee = deliveryMethods[index % deliveryMethods.length].fee;
  const tax = Number(((subtotal - discount) * 0.0825).toFixed(2));
  const grandTotal = Number((subtotal - discount + shippingFee + tax).toFixed(2));
  const status = statuses[index % statuses.length];
  const timeline = statuses
    .filter((step) => statuses.indexOf(step) <= statuses.indexOf(status) && step !== 'Cancelled')
    .map((step, stepIndex) => ({
      status: step,
      date: `2026-05-${String(Math.min(21, index + stepIndex + 1)).padStart(2, '0')}T09:00:00Z`,
      note: `${step} by ShopEase operations`
    }));
  if (status === 'Cancelled') {
    timeline.push({ status: 'Cancelled', date: `2026-05-${String(Math.min(22, index + 2)).padStart(2, '0')}T13:00:00Z`, note: 'Cancelled by customer request' });
  }
  return {
    id: `order-${index + 1}`,
    userId: index % 5 === 0 ? 'user-1' : `user-${(index % 10) + 1}`,
    number: `SE-${10001 + index}`,
    items,
    status,
    timeline,
    address: addresses[index % addresses.length],
    paymentMethod: paymentMethods[index % paymentMethods.length],
    deliveryMethod: deliveryMethods[index % deliveryMethods.length],
    subtotal,
    discount,
    shippingFee,
    tax,
    grandTotal,
    couponCode: discount ? 'WELCOME10' : undefined,
    createdAt: `2026-05-${String(index + 1).padStart(2, '0')}T11:00:00Z`
  };
});
