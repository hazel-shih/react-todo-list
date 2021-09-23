import React from 'react'
import Todos from "./components/Todos"

function App() {
  return (
    <section className="todo-list">
      <div className="wrapper">
        <h1 className="title">TODO LIST</h1>
        <Todos />
        <button className="delete-all">Delete All</button>
      </div>
    </section>
  )
}

export default App;