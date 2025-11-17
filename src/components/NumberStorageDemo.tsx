import { useNumberStorage } from '../hooks/useNumberStorage'

export function NumberStorageDemo() {
  const [count, setCount] = useNumberStorage('number-storage', 0)

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>useNumberStorage Demo</h2>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
        Value persists in localStorage. Refresh the page to see it persist!
      </p>
    </div>
  )
}

