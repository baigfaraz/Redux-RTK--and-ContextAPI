import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const editTodo = (id, todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, title: todo };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) {
      setTodos(todos);
    }
  }
  , []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  , [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            }
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
