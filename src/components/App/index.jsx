import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Todos from "../Todos";
import Input from "../Input";
import Filter from "../Filter";

function writeTodosIntoLocalStorage(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

function App() {
  const id = useRef(1);
  const [todos, setTodos] = useState(() => {
    let todosData = window.localStorage.getItem("todos") || "";
    if (todosData && todosData !== "[]") {
      todosData = JSON.parse(todosData);
      id.current = todosData[0].id + 1;
    } else {
      todosData = [];
    }
    return todosData;
  });
  const [filterState, setFilterState] = useState("all");

  useEffect(() => {
    writeTodosIntoLocalStorage(todos);
  }, [todos]);

  const createTask = (todo) => {
    setTodos([
      {
        id: id.current,
        content: todo,
        isDone: false,
      },
      ...todos,
    ]);
    id.current++;
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  function handleDeleteAll() {
    setTodos([]);
  }

  function handleFilter(btnName) {
    setFilterState(btnName);
  }

  function handleEditContent(id, newContent) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          content: newContent,
        };
      })
    );
  }

  return (
    <section className="todo-list">
      <div
        style={{ paddingBottom: todos.length !== 0 ? "60px" : "35px" }}
        className="wrapper"
      >
        <h1 className="title">TODO LIST</h1>
        <Input onKeyPress={createTask} />
        <Filter handleFilter={handleFilter} show={todos.length !== 0} />
        <div>
          <Todos
            todosData={todos}
            showData={filterState}
            handleDelete={handleDelete}
            handleToggleIsDone={handleToggleIsDone}
            handleEditContent={handleEditContent}
          />
        </div>
        <button
          style={todos.length !== 0 ? {} : { display: "none" }}
          onClick={handleDeleteAll}
          className="delete-all"
        >
          Delete All
        </button>
      </div>
    </section>
  );
}

export default App;
