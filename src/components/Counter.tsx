import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  )
}

