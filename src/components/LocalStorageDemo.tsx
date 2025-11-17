import { useLocalStorage } from '../hooks/useLocalStorage'

interface Todo {
  id: number
  task: string
  done: boolean
}

export function LocalStorageDemo() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('generic-todos', [])

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      task: `Task ${todos.length + 1}`,
      done: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>useLocalStorage (Generic) Demo</h2>
      <div style={{ marginTop: '8px' }}>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={() => setTodos([])} style={{ marginLeft: '8px' }}>Clear All</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            style={{ 
              padding: '8px', 
              marginBottom: '8px', 
              backgroundColor: todo.done ? '#d4edda' : '#f8f9fa',
              textDecoration: todo.done ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.task}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
        Using generic useLocalStorage hook. Todos persist in localStorage!
      </p>
    </div>
  )
}

