import { useState } from 'react'
import type { FormEvent } from 'react'

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string }) => void
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ name: '', email: '' })
  }

  const handleChange = (field: 'name' | 'email') => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Contact Form</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Enter your name"
          style={{ padding: '8px' }}
          required
        />
        <input
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Enter your email"
          style={{ padding: '8px' }}
          required
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

