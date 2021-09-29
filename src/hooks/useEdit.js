import { useState } from "react";

function useEdit(todo) {
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(todo.content);

  function handleCheck() {
    setEditing(false);
  }

  function handleEdit() {
    setEditing((prevValue) => !prevValue);
  }

  function handleCancel() {
    setEditing((prevValue) => !prevValue);
    setEditContent(todo.content);
  }

  function handleChangeInput(e) {
    const { value } = e.target;
    setEditContent(value);
  }

  function handleFinish(handleEditContent, id, newContent) {
    setEditing((prevValue) => !prevValue);
    if (newContent === "") return;
    handleEditContent(id, newContent);
  }

  return {
    editing,
    setEditing,
    editContent,
    setEditContent,
    handleCheck,
    handleEdit,
    handleCancel,
    handleChangeInput,
    handleFinish,
  };
}

export default useEdit;
