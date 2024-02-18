import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (!inputValue) {
      message.error("Please enter a todo description");
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-5 lg:px-6 bg-gray-300">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-start text-xl font-bold leading-9 tracking-tight text-gray-900">
            Add Your Todo
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmitClick}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="todo"
                  name="todo"
                  placeholder="Enter your todo here..."
                  type="text"
                  autoComplete="off"
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="block w-full rounded-md text-sm font-medium leading-6 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add +
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
