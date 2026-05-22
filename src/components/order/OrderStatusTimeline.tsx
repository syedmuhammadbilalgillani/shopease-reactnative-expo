import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Order } from '@/types';
import { formatDate } from '@/utils/format';

export const OrderStatusTimeline = ({ order }: { order: Order }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {order.timeline.map((item, index) => (
        <View key={`${item.status}-${index}`} style={styles.row}>
          <View style={[styles.dot, { backgroundColor: item.status === 'Cancelled' ? theme.colors.danger : theme.colors.primary }]} />
          <View style={styles.textWrap}>
            <Text style={[styles.status, { color: theme.colors.text }]}>{item.status}</Text>
            <Text style={[styles.note, { color: theme.colors.mutedText }]}>{item.note} • {formatDate(item.date)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 14 },
  row: { flexDirection: 'row', gap: 10 },
  dot: { width: 12, height: 12, borderRadius: 6, marginTop: 4 },
  textWrap: { flex: 1 },
  status: { fontSize: 15, fontWeight: '900' },
  note: { marginTop: 2, fontSize: 12, lineHeight: 17 }
});
