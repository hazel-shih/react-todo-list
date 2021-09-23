import React from "react"
import "./style.css"

function Input(props) {
  return (
    <input type="text" className="create-task" onChange={props.onChange}
    onKeyPress={props.onKeyPress} value={props.value} autoFocus />
  )
}

export default Input;