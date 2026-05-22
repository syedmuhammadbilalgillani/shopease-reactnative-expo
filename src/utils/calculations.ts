import { TAX_RATE } from '@/constants';
import { CartItem, CheckoutTotals, Coupon, DeliveryMethod, Product } from '@/types';

export const getDiscountedPrice = (product: Product) => {
  if (!product.discountPercent) return product.price;
  return Number((product.price * (1 - product.discountPercent / 100)).toFixed(2));
};

export const getCartSubtotal = (items: CartItem[], products: Product[]) =>
  Number(items.filter((item) => !item.savedForLater).reduce((total, item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    return product ? total + getDiscountedPrice(product) * item.quantity : total;
  }, 0).toFixed(2));

export const getProductDiscountTotal = (items: CartItem[], products: Product[]) =>
  Number(items.filter((item) => !item.savedForLater).reduce((total, item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    if (!product || !product.discountPercent) return total;
    return total + (product.price - getDiscountedPrice(product)) * item.quantity;
  }, 0).toFixed(2));

export const validateCoupon = (coupon: Coupon | undefined, subtotal: number) => {
  if (!coupon) return { valid: false, message: 'Coupon not found.' };
  if (!coupon.active || new Date(coupon.expiresAt) < new Date()) return { valid: false, message: 'Coupon is expired or inactive.' };
  if (subtotal < coupon.minOrderValue) return { valid: false, message: `Minimum order value is ${coupon.minOrderValue}.` };
  return { valid: true, message: 'Coupon applied.' };
};

export const getCouponDiscount = (coupon: Coupon | undefined, subtotal: number) => {
  const validation = validateCoupon(coupon, subtotal);
  if (!validation.valid || !coupon) return 0;
  return Number((coupon.type === 'percent' ? subtotal * (coupon.value / 100) : coupon.value).toFixed(2));
};

export const getCheckoutTotals = (
  items: CartItem[],
  products: Product[],
  coupon?: Coupon,
  deliveryMethod?: DeliveryMethod
): CheckoutTotals => {
  const subtotal = getCartSubtotal(items, products);
  const discount = getProductDiscountTotal(items, products);
  const couponDiscount = getCouponDiscount(coupon, subtotal);
  const shippingFee = deliveryMethod?.fee ?? (subtotal > 100 ? 0 : 7.99);
  const taxable = Math.max(0, subtotal - couponDiscount);
  const tax = Number((taxable * TAX_RATE).toFixed(2));
  const grandTotal = Number(Math.max(0, taxable + shippingFee + tax).toFixed(2));
  return { subtotal, discount, couponDiscount, shippingFee, tax, grandTotal };
};

export const hasEnoughStock = (items: CartItem[], products: Product[]) =>
  items.every((item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    if (!product) return false;
    const variant = item.variantId ? product.variants.find((candidate) => candidate.id === item.variantId) : undefined;
    return (variant?.stock ?? product.stock) >= item.quantity;
  });
