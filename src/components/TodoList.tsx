import { useState } from 'react'

interface Todo {
  id: number
  task: string
  done: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [taskInput, setTaskInput] = useState<string>('')

  const addTodo = () => {
    if (taskInput.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        task: taskInput,
        done: false
      }
      setTodos([...todos, newTodo])
      setTaskInput('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Todo List</h2>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: '8px', flex: 1 }}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
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
    </div>
  )
}

