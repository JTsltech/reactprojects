import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-purple-400 text-white font-bold underline'>First app with tailwind</h1>
      <Card username = "jyoti" btnText = "click me"/>
      <Card username = "naina" btnText = "visit me"/>

    </>
  )
}

export default App
