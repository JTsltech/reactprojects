import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodos'
import TodoContainer from './components/TodoContainer'

function App() {

  return (
    <>
      <h1>React Redux Toolkit</h1>
      <AddTodo/>
      <TodoContainer/>
    </>
  )
}

export default App
