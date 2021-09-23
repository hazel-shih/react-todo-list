import React, { useState } from "react";
import "./style.css";
import TodoItem from "../TodoItem";
import Input from "../Input";

var id = 2;

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: id,
      content: 'value',
      isDone: true
    }
  ]);

  const [value, setValue] = useState("");

  const handleCreateTask = (e) => {
    if (e.key === "Enter") {
      if (value === "") return;
      setTodos([
        {
          id: id,
          content: value,
          isDone: false
        },
        ...todos,
      ]);
      setValue("");
      id ++;
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }

  return (
    <div>
      <Input
        onKeyPress={handleCreateTask}
        onChange={handleInputChange}
        value={value}
      />
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggleIsDone={handleToggleIsDone}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;
