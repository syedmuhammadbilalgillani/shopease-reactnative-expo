import { Address, PaymentMethod, User } from '@/types';

export const users: User[] = [
  { id: 'user-1', name: 'Ava Brooks', email: 'ava@shopease.dev', password: 'Password123', phone: '+1 415 555 0101', avatar: 'https://i.pravatar.cc/200?img=1', location: 'San Francisco, CA', preferredCurrency: 'USD', language: 'en' },
  { id: 'user-2', name: 'Noah Carter', email: 'noah@shopease.dev', password: 'Password123', phone: '+1 212 555 0180', avatar: 'https://i.pravatar.cc/200?img=2', location: 'New York, NY', preferredCurrency: 'USD', language: 'en' },
  { id: 'user-3', name: 'Mia Wilson', email: 'mia@shopease.dev', password: 'Password123', phone: '+44 20 7946 0902', avatar: 'https://i.pravatar.cc/200?img=3', location: 'London, UK', preferredCurrency: 'GBP', language: 'en' },
  { id: 'user-4', name: 'Ethan Singh', email: 'ethan@shopease.dev', password: 'Password123', phone: '+1 650 555 0192', avatar: 'https://i.pravatar.cc/200?img=4', location: 'Austin, TX', preferredCurrency: 'USD', language: 'en' },
  { id: 'user-5', name: 'Sophia Khan', email: 'sophia@shopease.dev', password: 'Password123', phone: '+92 300 555 0101', avatar: 'https://i.pravatar.cc/200?img=5', location: 'Lahore, PK', preferredCurrency: 'PKR', language: 'ur' },
  { id: 'user-6', name: 'Leo Martinez', email: 'leo@shopease.dev', password: 'Password123', phone: '+34 91 555 0101', avatar: 'https://i.pravatar.cc/200?img=6', location: 'Madrid, ES', preferredCurrency: 'EUR', language: 'es' },
  { id: 'user-7', name: 'Emma Johnson', email: 'emma@shopease.dev', password: 'Password123', phone: '+1 305 555 0177', avatar: 'https://i.pravatar.cc/200?img=7', location: 'Miami, FL', preferredCurrency: 'USD', language: 'en' },
  { id: 'user-8', name: 'Oliver Stone', email: 'oliver@shopease.dev', password: 'Password123', phone: '+1 702 555 0195', avatar: 'https://i.pravatar.cc/200?img=8', location: 'Las Vegas, NV', preferredCurrency: 'USD', language: 'en' },
  { id: 'user-9', name: 'Isla Reed', email: 'isla@shopease.dev', password: 'Password123', phone: '+1 206 555 0110', avatar: 'https://i.pravatar.cc/200?img=9', location: 'Seattle, WA', preferredCurrency: 'USD', language: 'en' },
  { id: 'user-10', name: 'Liam Patel', email: 'admin@shopease.dev', password: 'Admin1234', phone: '+1 312 555 0158', avatar: 'https://i.pravatar.cc/200?img=10', location: 'Chicago, IL', preferredCurrency: 'USD', language: 'en' }
];

export const addresses: Address[] = [
  { id: 'addr-1', userId: 'user-1', label: 'Home', fullName: 'Ava Brooks', phone: '+1 415 555 0101', line1: '120 Market Street', line2: 'Apt 18B', city: 'San Francisco', state: 'CA', postalCode: '94105', country: 'USA', isDefault: true },
  { id: 'addr-2', userId: 'user-1', label: 'Office', fullName: 'Ava Brooks', phone: '+1 415 555 0101', line1: '500 Mission Bay Blvd', city: 'San Francisco', state: 'CA', postalCode: '94158', country: 'USA', isDefault: false },
  { id: 'addr-3', userId: 'user-2', label: 'Home', fullName: 'Noah Carter', phone: '+1 212 555 0180', line1: '44 Hudson Yard', city: 'New York', state: 'NY', postalCode: '10001', country: 'USA', isDefault: true },
  { id: 'addr-4', userId: 'user-3', label: 'Flat', fullName: 'Mia Wilson', phone: '+44 20 7946 0902', line1: '18 King Street', city: 'London', state: 'London', postalCode: 'SW1A 1AA', country: 'UK', isDefault: true },
  { id: 'addr-5', userId: 'user-5', label: 'Home', fullName: 'Sophia Khan', phone: '+92 300 555 0101', line1: 'House 24, Block B, Johar Town', city: 'Lahore', state: 'Punjab', postalCode: '54000', country: 'Pakistan', isDefault: true }
];

export const paymentMethods: PaymentMethod[] = [
  { id: 'pay-1', userId: 'user-1', type: 'card', title: 'Visa ending 4242', last4: '4242', brand: 'Visa', expiry: '12/28', isDefault: true },
  { id: 'pay-2', userId: 'user-1', type: 'wallet', title: 'ShopEase Wallet', isDefault: false },
  { id: 'pay-3', userId: 'user-1', type: 'cod', title: 'Cash on Delivery', isDefault: false },
  { id: 'pay-4', userId: 'user-2', type: 'card', title: 'Mastercard ending 8821', last4: '8821', brand: 'Mastercard', expiry: '10/27', isDefault: true },
  { id: 'pay-5', userId: 'user-5', type: 'cod', title: 'Cash on Delivery', isDefault: true }
];
