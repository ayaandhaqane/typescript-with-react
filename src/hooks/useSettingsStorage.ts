import { useState } from 'react'

interface Settings {
  language: string
  notifications: boolean
}

export function useSettingsStorage(key: string, initialValue: Settings): [Settings, (val: Settings) => void] {
  const [storedValue, setStoredValue] = useState<Settings>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (val: Settings) => {
    try {
      setStoredValue(val)
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

