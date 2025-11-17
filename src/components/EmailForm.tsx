import { useState } from 'react'
import type { FormEvent } from 'react'

interface EmailFormProps {
  onSubmit: (email: string) => void
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(email)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Email Form</h2>
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ padding: '8px', flex: 1 }}
          required
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

