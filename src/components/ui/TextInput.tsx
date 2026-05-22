import React from 'react';
import { StyleProp, StyleSheet, Text, TextInput as RNTextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

type Props = TextInputProps & {
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const TextInputField = ({ label, error, containerStyle, style, ...props }: Props) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text> : null}
      <RNTextInput
        placeholderTextColor={theme.colors.mutedText}
        style={[
          styles.input,
          { backgroundColor: theme.colors.input, color: theme.colors.text, borderColor: error ? theme.colors.danger : theme.colors.border, borderRadius: theme.radius.md },
          style
        ]}
        {...props}
      />
      {error ? <Text style={[styles.error, { color: theme.colors.danger }]}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 6 },
  label: { fontSize: 13, fontWeight: '700' },
  input: { minHeight: 48, borderWidth: 1, paddingHorizontal: 14, fontSize: 15 },
  error: { fontSize: 12, fontWeight: '600' }
});
