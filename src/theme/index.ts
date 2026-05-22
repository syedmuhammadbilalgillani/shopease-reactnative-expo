import { lightColors, darkColors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { radius } from './radius';
import { shadows } from './shadows';
import { layout } from './layout';

export const themes = {
  light: { colors: lightColors, spacing, typography, radius, shadows, layout },
  dark: { colors: darkColors, spacing, typography, radius, shadows, layout }
};

export type AppTheme = typeof themes.light;
export type ThemeMode = keyof typeof themes;
