export const useLocalStorage = (key: string) => {
  const setStoredValue = (value: any) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getStoredValue = () => {
    if (typeof localStorage !== "undefined") {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    }
  };

  const deleteStoredValue = () => {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
      return "deleted";
    }
  };

  return [getStoredValue, setStoredValue, deleteStoredValue] as const;
};
