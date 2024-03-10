import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{
    setCount(count+1)
  }

  const removeValue = () =>{
    setCount(count-1)
  }


  return (
    <>
      <h1>Chai with react  | counter {count}</h1>
      <button onClick={addValue}>Add Value</button>
    </>
  )
}

export default App
