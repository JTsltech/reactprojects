import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodos'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1>React Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
