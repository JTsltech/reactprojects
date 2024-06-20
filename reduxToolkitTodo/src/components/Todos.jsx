import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo,setTodo,setTodoComplete,setTodoImportant,setPanelName } from "../features/todo/todoSlice";

function Todos({panelName}){

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const [IsImportant,setIsImportant] = useState(false)

    const edit = (todo) =>{
      dispatch(setTodo(todo))
    }

    const toggleCompleted = (todo) =>{
        dispatch(setTodoComplete(todo))
    }

    const toggleImportant = (todo) =>{
      debugger;
      dispatch(setTodoImportant(todo))  
      //setIsImportant(!todo.isImportant)    
    }

    useEffect(()=>{
      todos.map((todoObj)=>{
        debugger;
        if(todoObj.isImportant  == true){
          dispatch(setPanelName(todoObj))
        }
      })
    },[])
    
    return (
        <>
        {/* <div>Todos</div> */}
        <ul className="list-none gap-y-3">
            {todos.filter(todo => todo.panelName == panelName).
            map((todo) => (
              <li
                className="mt-4 w-full flex bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}
              >
                <input type="checkbox" 
                  className="cursor-pointer inline-flex mr-4"
                  value={todo.isCompleted}
                  onChange={() => toggleCompleted(todo)}
                />
                <div className={`text-white text-left w-full ${todo.isCompleted ? "line-through" : ""}`}>{todo.text}</div>
                <button onClick={() => edit(todo)} className="inline-flex items-center mr-4 justify-center text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >Edit</button>
                <button
                 onClick={() => dispatch(removeTodo(todo.id))}
                  className="inline-flex items-center justify-center text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
                <button className={`text-white inline-flex item-center mt-2 ml-4 cursor-pointer justify-center ${todo.isImportant ? "fa fa-star checked" :"fa fa-star-o "}`}
                  onClick={() =>toggleImportant(todo)}
                ></button>
              </li>
            ))}
          </ul>
        </>
      )
}

export default Todos