import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Header } from '@/components/ui/Header';
import { EmptyState } from '@/components/ui/EmptyState';
import { Badge } from '@/components/ui/Badge';
import { useAppStore } from '@/store/appStore';
import { useAuthStore } from '@/store/authStore';
import { useTheme } from '@/hooks/useTheme';
import { formatDate } from '@/utils/format';

export default function NotificationsScreen() {
  const theme = useTheme();
  const user = useAuthStore((state) => state.user);
  const notifications = useAppStore((state) => state.notifications).filter((item) => !user || item.userId === user.id);
  const markRead = useAppStore((state) => state.markNotificationRead);
  const remove = useAppStore((state) => state.deleteNotification);
  return (
    <Screen>
      <Header title="Notifications" showBack />
      {!notifications.length ? <EmptyState title="No notifications" message="Promotions, order updates, and system alerts will show here." /> : <View style={styles.list}>{notifications.map((item) => (
        <Pressable key={item.id} onPress={() => markRead(item.id)} style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: item.read ? theme.colors.border : theme.colors.primary, borderRadius: theme.radius.lg }]}>
          <View style={styles.row}><Badge label={item.type} /><Pressable onPress={() => remove(item.id)}><Text style={{ color: theme.colors.danger, fontWeight: '900' }}>Delete</Text></Pressable></View>
          <Text style={[styles.title, { color: theme.colors.text }]}>{item.title}</Text>
          <Text style={[styles.body, { color: theme.colors.mutedText }]}>{item.body}</Text>
          <Text style={[styles.date, { color: theme.colors.mutedText }]}>{formatDate(item.createdAt)} {item.read ? '• Read' : '• New'}</Text>
        </Pressable>
      ))}</View>}
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { gap: 12 },
  card: { borderWidth: 1, padding: 14, gap: 7 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '900' },
  body: { fontSize: 13, lineHeight: 19 },
  date: { fontSize: 12, fontWeight: '700' }
});
