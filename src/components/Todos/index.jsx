import React from "react"
import TodoItem from "../TodoItem"

function Todos(props) {
  var filterData
  if(props.showData === 'all'){
    filterData = props.todosData
  } else if(props.showData === 'isDone'){
    filterData = props.todosData.filter(todo => todo.isDone)
  } else {
    filterData = props.todosData.filter(todo => !todo.isDone)
  }
  return (
    filterData.map(data => (
      <TodoItem
        key={data.id}
        todo={data}
        handleDelete={props.handleDelete}
        handleToggleIsDone={props.handleToggleIsDone}
      />
    ))
  )
}

export default Todos