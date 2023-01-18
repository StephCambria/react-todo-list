import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export const TodoList = () => {
  // ====================================================
  // Setting the initial state
  const [todos, setTodos] = useState([]);
  // ====================================================

  // ====================================================
  // Add Todo functionality
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  // ====================================================

  // ====================================================
  // Update Todo functionality
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  // ====================================================

  // ====================================================
  // Remove Todo functionality
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id); // Filtering through Todo array via ID
    setTodos(removeArr);
  };
  // ====================================================

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What the McShit?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
