import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
    <h1 style={{
      textAlign: 'center',
      fontSize: '2rem',
      margin: '20px 0',
      color: '#333',
      textTransform: 'uppercase',
    
    }}
    >Add Todo</h1>
      <AddTodo/>
      <Todos/>
    </>
  );
}

export default App;
