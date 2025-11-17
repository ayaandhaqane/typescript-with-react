import { useState } from 'react'

export function useNumberStorage(key: string, initialValue: number): [number, (val: number) => void] {
  const [storedValue, setStoredValue] = useState<number>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (val: number) => {
    try {
      setStoredValue(val)
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

