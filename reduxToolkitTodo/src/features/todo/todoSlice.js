import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"Hello world",
        isEditable:false
    }]
}

const setIsEditable = (todo,id) =>{
    todo.id === id ? todo.isEditable = !todo.isEditable : todo
    return todo;
}

const updateTodoItem = (todo,text) =>{
    debugger;
    todo.isEditable === true ? todo = {id:todo.id,text:text,isEditable:false }: todo
    return todo;
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
       addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text: action.payload.text,
                isEditable:action.payload.isEditable
            }
            state.todos.push(todo)
       },
       removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
       },
       updateTodo:(state,action) => {
            state.todos = state.todos.map((todo) => (
                updateTodoItem(todo,action.payload.text)
            ))
       },
       setTodo:(state,action) =>{
            state.todos = state.todos.map((todo) => (
                setIsEditable(todo,action.payload.id)
            ))
       }
    }
})

export const {addTodo,removeTodo,updateTodo,setTodo} = todoSlice.actions

export default todoSlice.reducer