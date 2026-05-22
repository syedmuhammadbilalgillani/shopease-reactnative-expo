import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

type Props = { value: number; onChange?: (value: number) => void; size?: number };

export const StarRating = ({ value, onChange, size = 15 }: Props) => {
  const theme = useTheme();
  return (
    <View style={styles.row}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Pressable key={star} disabled={!onChange} onPress={() => onChange?.(star)}>
          <Text style={{ fontSize: size, color: star <= Math.round(value) ? theme.colors.warning : theme.colors.border }}>★</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({ row: { flexDirection: 'row', alignItems: 'center' } });
