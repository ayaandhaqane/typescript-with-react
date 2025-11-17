import { useState } from 'react'
import type { FormEvent } from 'react'

interface AgeFormProps {
  onSubmit: (age: number) => void
}

export function AgeForm({ onSubmit }: AgeFormProps) {
  const [age, setAge] = useState<number>(0)
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const parsedAge = parseInt(inputValue, 10)
    
    if (isNaN(parsedAge) || parsedAge < 18) {
      return
    }
    
    setAge(parsedAge)
    onSubmit(parsedAge)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Age Form</h2>
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexDirection: 'column' }}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your age"
          style={{ padding: '8px' }}
          required
        />
        <button type="submit">Submit</button>
        {age > 0 && <p>Current age: {age}</p>}
        {inputValue && parseInt(inputValue, 10) < 18 && (
          <p style={{ color: 'red' }}>Age must be 18 or older</p>
        )}
      </div>
    </form>
  )
}

