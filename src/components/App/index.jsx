import React, { useState } from "react"
import "./style.css"
import Todos from "../Todos"
import Input from "../Input"
import Filter from "../Filter"

var id = 1


function App() {
  const [todos, setTodos] = useState([])
  const [filterState, setFilterState] = useState('all')

  const createTask = (todo) => {
    setTodos([
      {
        id: id,
        content: todo,
        isDone: false
      },
      ...todos,
    ])
    id ++
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggleIsDone = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }

  function handleEdit(id) {
    console.log(1);
  }

  function handleDeleteAll() {
    setTodos([])
  }

  function handleFilter(btnName) {
    setFilterState(btnName)
  }

  function handleEditContent(id, newContent) {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo
      return {
        ...todo,
        content: newContent
      }
    } ))
  }

  return (
    <section className="todo-list">
      <div style={{paddingBottom: todos.length !== 0 ? '60px' : '35px'}} className="wrapper">
        <h1 className="title">TODO LIST</h1>
        <Input onKeyPress={createTask} />
        <Filter handleFilter={handleFilter} show={todos.length !== 0}/>
        <div>
          <Todos 
          todosData={todos} 
          showData={filterState} 
          handleDelete={handleDelete}
          handleToggleIsDone={handleToggleIsDone}
          handleEdit={handleEdit}
          handleEditContent={handleEditContent}
          />
        </div>
        <button style={todos.length !== 0 ? {} : {display: 'none'}} onClick={handleDeleteAll} className="delete-all">Delete All</button>
      </div>
    </section>
  )  
}

export default App
