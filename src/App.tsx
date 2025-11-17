import './App.css'
import { Welcome } from './components/Welcome'
import { ProductCard } from './components/ProductCard'
import { Counter } from './components/Counter'
import { UserState } from './components/UserState'
import { TodoList } from './components/TodoList'
import { EmailForm } from './components/EmailForm'
import { AgeForm } from './components/AgeForm'
import { ContactForm } from './components/ContactForm'
import { NumberStorageDemo } from './components/NumberStorageDemo'
import { SettingsStorageDemo } from './components/SettingsStorageDemo'
import { LocalStorageDemo } from './components/LocalStorageDemo'

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

      <hr style={{ marginTop: 32, marginBottom: 32 }} />
      
      <div style={{ display: 'grid', gap: 16, marginTop: 16 }}>
        <EmailForm onSubmit={(email) => console.log('Email submitted:', email)} />
        <AgeForm onSubmit={(age) => console.log('Age submitted:', age)} />
        <ContactForm onSubmit={(data) => console.log('Contact submitted:', data)} />
      </div>

      <hr style={{ marginTop: 32, marginBottom: 32 }} />
      
      <div style={{ display: 'grid', gap: 16, marginTop: 16 }}>
        <NumberStorageDemo />
        <SettingsStorageDemo />
        <LocalStorageDemo />
      </div>
    </>
  )
}

export default App
