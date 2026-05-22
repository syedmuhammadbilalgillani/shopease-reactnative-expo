import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email.'),
  password: z.string().min(6, 'Password must be at least 6 characters.')
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Enter a valid email.'),
  phone: z.string().min(8, 'Phone number is required.'),
  password: z.string().min(8, 'Password must be at least 8 characters.')
});

export const forgotSchema = z.object({ email: z.string().email('Enter a valid email.') });
export const otpSchema = z.object({ code: z.string().length(6, 'Enter the 6 digit code.') });

export const profileSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  phone: z.string().min(8, 'Phone number is required.'),
  location: z.string().min(2, 'Location is required.')
});

export const addressSchema = z.object({
  label: z.string().min(2, 'Label is required.'),
  fullName: z.string().min(2, 'Full name is required.'),
  phone: z.string().min(8, 'Phone number is required.'),
  line1: z.string().min(5, 'Street address is required.'),
  city: z.string().min(2, 'City is required.'),
  state: z.string().min(2, 'State is required.'),
  postalCode: z.string().min(3, 'Postal code is required.'),
  country: z.string().min(2, 'Country is required.')
});

export const cardSchema = z.object({
  name: z.string().min(2, 'Cardholder name is required.'),
  number: z.string().regex(/^\d{16}$/, 'Use a 16 digit mock card number.'),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Use MM/YY format.'),
  cvc: z.string().regex(/^\d{3,4}$/, 'Use a valid CVC.')
});

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().min(3, 'Title is required.'),
  comment: z.string().min(10, 'Review must be at least 10 characters.')
});

export const productSchema = z.object({
  name: z.string().min(3, 'Product name is required.'),
  price: z.coerce.number().min(1, 'Price must be greater than 0.'),
  stock: z.coerce.number().min(0, 'Stock cannot be negative.'),
  brand: z.string().min(2, 'Brand is required.'),
  categoryId: z.string().min(2, 'Category is required.')
});
