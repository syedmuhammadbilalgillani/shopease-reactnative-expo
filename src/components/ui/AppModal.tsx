import React from 'react';
import { Modal, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Button } from './Button';

type Props = {
  visible: boolean;
  title: string;
  message?: string;
  children?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
};

export const AppModal = ({ visible, title, message, children, confirmLabel, cancelLabel = 'Cancel', onConfirm, onClose, style }: Props) => {
  const theme = useTheme();
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={[styles.content, { backgroundColor: theme.colors.surface, borderRadius: theme.radius.xl }, style]}>
          <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
          {message ? <Text style={[styles.message, { color: theme.colors.mutedText }]}>{message}</Text> : null}
          {children}
          <View style={styles.actions}>
            <Button title={cancelLabel} variant="ghost" onPress={onClose} style={styles.action} />
            {confirmLabel ? <Button title={confirmLabel} onPress={onConfirm} style={styles.action} /> : null}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(2,6,23,0.52)', justifyContent: 'center', padding: 22 },
  content: { padding: 18, gap: 10 },
  title: { fontSize: 20, fontWeight: '900' },
  message: { fontSize: 14, lineHeight: 20 },
  actions: { flexDirection: 'row', gap: 10, marginTop: 8 },
  action: { flex: 1 }
});
