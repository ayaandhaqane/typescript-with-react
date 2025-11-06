import React from 'react'

interface WelcomeProps {
  username: string
  isPremium: boolean
}

export function Welcome({ username, isPremium }: WelcomeProps) {
  const message = isPremium
    ? 'Welcome back, premium user!'
    : 'Welcome, guest'

  return (
    <section>
      <h2>{message}</h2>
      <p>User: {username}</p>
    </section>
  )
}


