import React from 'react';
import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Button = ({ title, onPress, disabled, loading, variant = 'primary', style, textStyle }: Props) => {
  const theme = useTheme();
  const background = variant === 'primary' ? theme.colors.primary : variant === 'secondary' ? theme.colors.surfaceAlt : variant === 'danger' ? theme.colors.danger : 'transparent';
  const color = variant === 'primary' || variant === 'danger' ? '#FFFFFF' : theme.colors.text;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: background, opacity: disabled ? 0.5 : pressed ? 0.78 : 1, borderColor: theme.colors.border, borderRadius: theme.radius.md },
        variant === 'ghost' && { borderWidth: 1 },
        style
      ]}
    >
      {loading ? <ActivityIndicator color={color} /> : <Text style={[styles.text, { color }, textStyle]}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 15,
    fontWeight: '800'
  }
});
