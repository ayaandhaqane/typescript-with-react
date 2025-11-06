import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Welcome } from './components/Welcome'
import { ProductCard } from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
