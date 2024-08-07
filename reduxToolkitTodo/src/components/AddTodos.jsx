import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { addTodo,updateTodo } from "../features/todo/todoSlice";

function AddTodos(){

    const [input,setInput] = useState("")
    const [IsEdit,setIsEdit] = useState(false)
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)


    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo({text:input,isEditable:false,isCompleted:false,isImportant:false,panelName:"Daily Tasks"}))
        setInput("")
    }

    const updateTodoHandler = (e) =>{
      e.preventDefault()
      dispatch(updateTodo({text:input,isEditable:false,isCompleted:false}))
      setInput("")
      setIsEdit(false)
    }

    useEffect(() => {
      todos.map((todoObj) => {
        if(todoObj.isEditable == true){
          setInput(todoObj.text)
          setIsEdit(true)
        }
      }
    )
      
    },[todos])

    

    return (
        <form onSubmit={IsEdit ? updateTodoHandler :addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {!IsEdit ?"Add Todo" :"Edit Todo"}
          </button>
        </form>
      )
}


export default AddTodos