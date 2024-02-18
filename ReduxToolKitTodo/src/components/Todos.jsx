import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/TodoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>My Todos</div>
      
        {todos.map((todo) => (
          <ul key={todo.id}>
            <li>
              <span>{todo.title}</span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </li>
          </ul>
        ))}
      <div/>
    </>
  );
}
