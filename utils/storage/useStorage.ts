import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export const useStorage = <T>(key: string, defaultValue: T): [T, (newValue: T) => void, boolean, () => void] => {
  const [value, setValue] = useState<T>(defaultValue);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { getItem, setItem, removeItem } = useAsyncStorage(key);

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item ? JSON.parse(item) : defaultValue);
    setLoaded(true);
  };

  const writeItemToStorage = async (newValue: T) => {
    await setItem(JSON.stringify(newValue));
    setValue(newValue);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) readItemFromStorage();
    return () => {
      isMounted = false;
    };
  }, []);

  return [value, writeItemToStorage, loaded, removeItem];
};
