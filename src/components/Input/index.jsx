import React, { useState } from "react"
import "./style.css"


function Input(props) {
  const [todo, setTodo] = useState("")

  const handleInputChange = (e) => {
    const { value } = e.target
    setTodo(value)
  }

  function handleKeyPress(e, todo, createTask) {
    if(e.key === 'Enter'){
      if(todo === '') return
      createTask(todo)
      setTodo("")
    }
  }

  return (
    <input type="text" className="create-task" onChange={handleInputChange}
    onKeyPress={(e) => {handleKeyPress(e, todo, props.onKeyPress)}} value={todo} autoFocus />
  )
}

export default Input