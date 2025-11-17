import './App.css'
import { Welcome } from './components/Welcome'
import { ProductCard } from './components/ProductCard'
import { Counter } from './components/Counter'
import { UserState } from './components/UserState'
import { TodoList } from './components/TodoList'

function App() {
  return (
    <>
        <div>
          <h1>Hello World</h1>
        </div>

      <hr />
      <Welcome username="Taylor" isPremium={true} />

      <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        <ProductCard name="Coffee Beans" price={12.5} description="Medium roast, 1lb bag" />
        <ProductCard name="Mug" price={8} />
        {/**
         * Break it on purpose (will error if uncommented):
         * <ProductCard name="Sticker" price="free" />
         */}
      </div>

      <hr style={{ marginTop: 32, marginBottom: 32 }} />
      
      <div style={{ display: 'grid', gap: 16, marginTop: 16 }}>
        <Counter />
        <UserState />
        <TodoList />
      </div>
    </>
  )
}

export default App
