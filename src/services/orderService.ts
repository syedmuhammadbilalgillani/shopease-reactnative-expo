import { Address, CartItem, DeliveryMethod, Order, PaymentMethod, Product } from '@/types';
import { getCheckoutTotals, hasEnoughStock } from '@/utils/calculations';
import { makeId } from '@/utils/format';
import { mockDelay } from './mockApi';
import { coupons } from '@/data/coupons';

export const orderService = {
  createOrder: async ({
    userId,
    items,
    products,
    address,
    paymentMethod,
    deliveryMethod,
    couponCode
  }: {
    userId: string;
    items: CartItem[];
    products: Product[];
    address: Address;
    paymentMethod: PaymentMethod;
    deliveryMethod: DeliveryMethod;
    couponCode?: string;
  }) => {
    const activeItems = items.filter((item) => !item.savedForLater);
    if (!activeItems.length) throw new Error('Cart is empty.');
    if (!hasEnoughStock(activeItems, products)) throw new Error('Some products are out of stock.');
    const coupon = coupons.find((item) => item.code === couponCode);
    const totals = getCheckoutTotals(activeItems, products, coupon, deliveryMethod);
    const orderItems = activeItems.map((item) => {
      const product = products.find((candidate) => candidate.id === item.productId)!;
      const variant = item.variantId ? product.variants.find((candidate) => candidate.id === item.variantId) : undefined;
      return { productId: product.id, name: product.name, image: product.images[0], price: product.price, quantity: item.quantity, variantName: variant?.name };
    });
    const now = new Date().toISOString();
    const order: Order = {
      id: makeId('order'),
      userId,
      number: `SE-${Math.floor(10000 + Math.random() * 89999)}`,
      items: orderItems,
      status: 'Pending',
      timeline: [{ status: 'Pending', date: now, note: 'Order placed successfully.' }],
      address,
      paymentMethod,
      deliveryMethod,
      subtotal: totals.subtotal,
      discount: totals.couponDiscount,
      shippingFee: totals.shippingFee,
      tax: totals.tax,
      grandTotal: totals.grandTotal,
      couponCode,
      createdAt: now
    };
    return mockDelay(order, false, 500);
  }
};
