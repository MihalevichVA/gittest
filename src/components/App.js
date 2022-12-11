import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import Counters from "./Counters";
import { generateTodos } from "../utils/generate-todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [priceTovalue, setPriceToValue] = useState(
    [...products].sort((a, b) => b.price - a.price)[0].price
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTodos(generateTodos(5));
    }, 2000);
  }, []);

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleAddTodo = () => {
    const names = name.trim();
    if (names === "") {
      return;
    }

    setName("");
    setTodos([{ name, done: false }].concat(todos));
  };

  const handleDeleteTodo = (name) =>
    setTodos(todos.filter((todo) => todo.name !== name));

  const handleSetDone = useCallback((done, id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, done } : todo))
    );
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list">
      <h1>To do</h1>
      <Counters
        total={todos.length}
        doneCount={todos.filter((todo) => todo.done).length}
      />
      <div className="input-todo">
        <input value={name} onChange={handleSetName} />
        <button
          disabled={name.trim() === ""}
          className="save"
          onClick={handleAddTodo}
        >
          Add new todo
        </button>
      </div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          done={todo.done}
          onDone={handleSetDone}
          onDelete={handleDeleteTodo}
        />
      ))}
    </div>
  );
};

export default App;
