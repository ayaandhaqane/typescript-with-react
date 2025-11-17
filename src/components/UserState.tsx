import { useState } from 'react'

interface User {
  username: string
  email: string
}

export function UserState() {
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = () => {
    setUser({
      username: 'ayaan',
      email: 'ayaan@example.com'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>User State</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>No user logged in</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  )
}

