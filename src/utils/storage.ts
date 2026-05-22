import AsyncStorage from '@react-native-async-storage/async-storage';

export const createJSONStorage = <T>() => ({
  getItem: async (name: string): Promise<T | null> => {
    const value = await AsyncStorage.getItem(name);
    return value ? JSON.parse(value) as T : null;
  },
  setItem: async (name: string, value: T): Promise<void> => {
    await AsyncStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: async (name: string): Promise<void> => {
    await AsyncStorage.removeItem(name);
  }
});
