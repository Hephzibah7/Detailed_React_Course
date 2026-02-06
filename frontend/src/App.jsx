import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basics from './Chapter1/BasicsOfJavascript'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Basics/>
      </div>
    </>
  )
}

export default App
