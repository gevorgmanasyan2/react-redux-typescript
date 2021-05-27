import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
};

export default App;
