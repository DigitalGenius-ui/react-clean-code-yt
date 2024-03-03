import { Reorder, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";

const TodoLists = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleAddTodo = () => {
    if (todos.includes(todo)) {
      return alert("This item exist");
    } else {
      setTodos((prev) => [...prev, todo]);
      setTodo("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div className="flex">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border border-gray-500 p-4 outline-none w-[25rem]"
          type="text"
          placeholder="todo..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-400 text-white w-[7rem] hover:opacity-65">
          Add
        </button>
      </div>
      <Reorder.Group
        axis="y"
        values={todos}
        onReorder={setTodos}
        className="mt-5 space-y-5">
        {todos.map((item) => (
          <Todo item={item} key={item} setTodos={setTodos} />
        ))}
      </Reorder.Group>
    </div>
  );
};

export default TodoLists;

const Todo = ({ item, setTodos }) => {
  const y = useMotionValue(0);

  const handleRemove = () => {
    setTodos((prev) => prev.filter((todo) => todo !== item));
  };
  return (
    <Reorder.Item
      style={{ y }}
      value={item}
      className="flex items-center justify-between border border-gray-500 p-4 bg-white">
      <p>{item}</p>
      <button onClick={handleRemove}>Remove</button>
    </Reorder.Item>
  );
};
