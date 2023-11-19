import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Используем key для уникального имени хранения в localStorage

  // Попытка получить сохраненное значение из localStorage
  const storedValue = localStorage.getItem(key);

  // Используем storedValue или initialValue, если в localStorage нет сохраненного значения
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  useEffect(() => {
    // При изменении значения сохраняем его в localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
