import React, {useState} from 'react';
import TodoForm from "./TodoForm";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    }
  return (
    <div>
        <h1>What the McShit?</h1>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList;
