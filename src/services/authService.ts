import { User } from '@/types';
import { users } from '@/data/users';
import { mockDelay } from './mockApi';
import { makeId } from '@/utils/format';

export const authService = {
  login: async (email: string, password: string) => {
    const user = users.find((candidate) => candidate.email.toLowerCase() === email.toLowerCase() && candidate.password === password);
    if (!user) return mockDelay<User | null>(null, false, 300);
    return mockDelay<User>(user, false, 300);
  },
  register: async (payload: Pick<User, 'name' | 'email' | 'phone'> & { password: string }) => mockDelay<User>({
    id: makeId('user'),
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    password: payload.password,
    avatar: `https://i.pravatar.cc/200?u=${encodeURIComponent(payload.email)}`,
    location: 'Set your location',
    preferredCurrency: 'USD',
    language: 'en'
  }),
  requestOtp: async (_email: string) => mockDelay({ otp: '123456' }),
  verifyOtp: async (code: string) => mockDelay({ verified: code === '123456' })
};
