import React from "react";
import "./App.css";
import Todo from "./Todo";
import Counters from "./Counters";
import { generateTodos } from "../utils/generate-todos";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      todos: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        todos: generateTodos(5000),
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    const { name, todos, isLoading } = this.state;

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
          <input value={name} onChange={this.handleSetName} />
          <button
            disabled={this.state.name.trim() === ""}
            className="save"
            onClick={this.handleAddTodo}
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
            onDone={this.handleSetDone}
            onDelete={this.handleDeleteTodo}
          />
        ))}
      </div>
    );
  }

  handleSetName = (e) => this.setState({ name: e.target.value });

  handleAddTodo = () => {
    const name = this.state.name.trim();
    if (name === "") {
      return;
    }

    this.setState({
      name: "",
      todos: [{ name, done: false }].concat(this.state.todos),
    });
  };

  handleDeleteTodo = (name) =>
    this.setState({
      todos: this.state.todos.filter((todo) => todo.name !== name),
    });

  handleSetDone = (done, id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, done } : todo
      ),
    });
  };
}

export default App;
