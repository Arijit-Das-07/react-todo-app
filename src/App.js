import React, { useState } from "react";
import "./index.css";
import Form from "./Form";
import List from "./List";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTask = todo => {
    setTodos(prev => prev.concat({ id: Date.now(), task: todo }));
  };

  const deleteTodo = id => {
    const arr = todos.filter(item => {
      if (item.id !== id) return item;
    
    else 
    return null;  
    }
    );
    setTodos(arr);
  };

  const editTodo = (id, text) => {
    const arr = todos.map(item => {
      if (item.id === id) {
        return { id: id, task: text };
      }
      return item;
    });

    setTodos(arr);
  };
  return (
    <div>
      <h1 className="heading">Todo App</h1>
      <Form onSubmit={addTask} />
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>//
  );
}
