import { themes } from '@/theme';
import { useAppStore } from '@/store/appStore';

export const useTheme = () => {
  const mode = useAppStore((state) => state.themeMode);
  return themes[mode];
};
