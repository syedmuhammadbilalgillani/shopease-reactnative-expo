export const lightColors = {
  mode: 'light',
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  secondary: '#F97316',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceAlt: '#EEF2FF',
  text: '#0F172A',
  mutedText: '#64748B',
  border: '#E2E8F0',
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
  info: '#0891B2',
  input: '#FFFFFF',
  shadow: '#000000',
  badge: '#DBEAFE'
} as const;

export const darkColors = {
  mode: 'dark',
  primary: '#60A5FA',
  primaryDark: '#3B82F6',
  secondary: '#FDBA74',
  background: '#020617',
  surface: '#0F172A',
  surfaceAlt: '#1E293B',
  text: '#F8FAFC',
  mutedText: '#94A3B8',
  border: '#334155',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#F87171',
  info: '#22D3EE',
  input: '#111827',
  shadow: '#000000',
  badge: '#1E3A8A'
} as const;

export type ThemeColors = typeof lightColors;
