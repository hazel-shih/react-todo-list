import React from "react"
import styled from "styled-components"
import deleteIMG from "../../img/delete.png"
import checkedIMG from "../../img/checked.png"
import "./style.css"

const TaskBlock = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 0 3%;
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  &:last-child {
    margin-bottom: 30px;
  }

  &:hover {
    background: #DDE6FA;
    transition: background 0.2s;
  }

  ${props => props.isDone && `
    filter: opacity(25%);
  `}
`

const CheckBox = styled.div`
  min-width: 18px;
  min-height: 18px;
  border: 1px solid #3B66C3;
  border-radius: 1px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px 1px #3B66C3;
  }

  ${props => props.isDone && `
    background-image: url(${checkedIMG});
    background-size: contain;
  `}
`

const Delete = styled.div`
  min-width: 22px;
  min-height: 22px;
  background-image: url(${deleteIMG});
  filter: opacity(40%);
  background-size: cover;
  cursor: pointer;

  &:hover {
    filter: none;
  }
`

function TodoItem({ todo, handleDelete, handleToggleIsDone }) {
  
  return (
    <TaskBlock isDone={todo.isDone}>
      <CheckBox isDone={todo.isDone} onClick={() => handleToggleIsDone(todo.id)} />
      <div className="task-name">{todo.content}</div>
      <Delete onClick={() => handleDelete(todo.id)} />
    </TaskBlock>
  )
}

export default TodoItem

