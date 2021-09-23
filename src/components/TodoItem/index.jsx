import React from "react";
import "./style.css"

function TodoItem({ todo, handleDelete }) {
  return (
    <div className="task-block">
      <div className="check-box" />
      <div className="task-name">{todo.content}</div>
      <div className="delete" onClick={() => handleDelete(todo.id) } />
    </div>
  )
}

export default TodoItem;

