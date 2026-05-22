export type ID = string;
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'PKR';

export type Category = {
  id: ID;
  name: string;
  slug: string;
  icon: string;
  description: string;
  subcategories: string[];
  image: string;
};

export type ProductVariant = {
  id: ID;
  type: 'size' | 'color' | 'storage' | 'pack';
  name: string;
  value: string;
  stock: number;
};

export type Review = {
  id: ID;
  productId: ID;
  userId: ID;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  images: string[];
  createdAt: string;
  mine?: boolean;
};

export type Product = {
  id: ID;
  sku: string;
  name: string;
  slug: string;
  categoryId: ID;
  subcategory: string;
  brand: string;
  images: string[];
  price: number;
  compareAtPrice?: number;
  discountPercent: number;
  stock: number;
  rating: number;
  reviewCount: number;
  description: string;
  specifications: Record<string, string>;
  variants: ProductVariant[];
  tags: string[];
  currency: CurrencyCode;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
  sold: number;
  createdAt: string;
  reviews: Review[];
};

export type User = {
  id: ID;
  name: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  location: string;
  preferredCurrency: CurrencyCode;
  language: 'en' | 'ur' | 'es';
};

export type Address = {
  id: ID;
  userId: ID;
  label: string;
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
};

export type PaymentMethod = {
  id: ID;
  userId: ID;
  type: 'card' | 'wallet' | 'cod';
  title: string;
  last4?: string;
  brand?: string;
  expiry?: string;
  isDefault: boolean;
};

export type CartItem = {
  id: ID;
  productId: ID;
  quantity: number;
  variantId?: ID;
  savedForLater?: boolean;
};

export type Coupon = {
  code: string;
  title: string;
  type: 'percent' | 'fixed';
  value: number;
  minOrderValue: number;
  expiresAt: string;
  active: boolean;
};

export type DeliveryMethod = {
  id: ID;
  title: string;
  description: string;
  fee: number;
  days: string;
};

export type OrderStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Packed'
  | 'Shipped'
  | 'Out for delivery'
  | 'Delivered'
  | 'Cancelled';

export type OrderItem = {
  productId: ID;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variantName?: string;
};

export type Order = {
  id: ID;
  userId: ID;
  number: string;
  items: OrderItem[];
  status: OrderStatus;
  timeline: { status: OrderStatus; date: string; note: string }[];
  address: Address;
  paymentMethod: PaymentMethod;
  deliveryMethod: DeliveryMethod;
  subtotal: number;
  discount: number;
  shippingFee: number;
  tax: number;
  grandTotal: number;
  couponCode?: string;
  createdAt: string;
};

export type Notification = {
  id: ID;
  userId: ID;
  type: 'promotion' | 'order' | 'system';
  title: string;
  body: string;
  read: boolean;
  createdAt: string;
};

export type ProductFilters = {
  query?: string;
  categoryId?: ID;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  discountOnly?: boolean;
  inStockOnly?: boolean;
};

export type ProductSort = 'newest' | 'price_asc' | 'price_desc' | 'rating' | 'best_selling';

export type CheckoutTotals = {
  subtotal: number;
  discount: number;
  couponDiscount: number;
  shippingFee: number;
  tax: number;
  grandTotal: number;
};
