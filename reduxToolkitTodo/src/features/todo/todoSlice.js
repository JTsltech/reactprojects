import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"Hello world",
        isEditable:false,
        isCompleted:false,
        isImportant:false,
        panelName:"Daily Tasks"
    }]
}

const setIsEditable = (todo,id) =>{
    todo.id === id ? todo.isEditable = !todo.isEditable : todo
    return todo;
}

const setIsCompleted = (todo,id) =>{
    todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    return todo;
}

const setIsImportant = (todo,id) =>{
    todo.id === id ? todo = {id:id,text:todo.text,isImportant:!todo.isImportant} : todo;
    return todo;
}

const updateTodoItem = (todo,text) =>{
    todo.isEditable === true ? todo = {id:todo.id,text:text,isEditable:false }: todo
    return todo;
}

const setPanel = (todo,id) =>{
    debugger;
    if(todo.id === id && todo.isImportant === true){
        todo.panelName = "Important"
    } 
    else{
        todo.panelName = "Daily Tasks"
    }
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
                isEditable:action.payload.isEditable,
                isCompleted:action.payload.isCompleted,
                isImportant:action.payload.isImportant,
                panelName:action.payload.panelName
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
       },
       setTodoComplete:(state,action) =>{
            state.todos = state.todos.map((todo) => (
                setIsCompleted(todo,action.payload.id)
            ))
        },
        setTodoImportant:(state,action) =>{
            state.todos = state.todos.map((todo) => (
                setIsImportant(todo,action.payload.id)
            ))
        },
        setPanelName:(state,action) =>{
            state.todos = state.todos.map((todo) =>(
                setPanel(todo,action.payload.id)
            ))
        }
    }
})

export const {addTodo,removeTodo,updateTodo,setTodo,setTodoComplete,setTodoImportant,setPanelName} = todoSlice.actions

export default todoSlice.reducer