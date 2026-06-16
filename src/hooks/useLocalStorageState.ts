import { useEffect, useState } from "react";

type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;

export function useLocalStorageState<T>(
  key: string,
  initialState: T,
): [T, Setter<T>] {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(function () {}, []);

  return [value, setValue];
}
