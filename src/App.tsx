import React, { FC } from "react";
import "./App.css";
import TodoListItem from "./components/TodoListItem";

type InitialTodos = {
  id: number;
  name: string;
  description: string;
  isComplete: boolean;
};

const App: FC = () => {
  const initialTodo: Array<InitialTodos> = [
    {
      id: 1,
      name: "Todo 1",
      description: "Todo One",
      isComplete: false,
    },
    {
      id: 2,
      name: "Todo 2",
      description: "Todo Two",
      isComplete: false,
    },
  ];
  const [todos, setTodos] = React.useState(initialTodo);
  return (
    <div className="App">
      <h1>Todo</h1>
      {todos && todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default App;
