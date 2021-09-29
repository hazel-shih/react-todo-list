import "./style.css";
import Todos from "../Todos";
import Input from "../Input";
import Filter from "../Filter";
import useTodos from "../../hooks/useTodos";
import useFilter from "../../hooks/useFilter";

function App() {
  const {
    id,
    todos,
    setTodos,
    createTask,
    handleDelete,
    handleToggleIsDone,
    handleDeleteAll,
    handleEditContent,
  } = useTodos();

  const { filter, setFilter, handleFilter } = useFilter();

  return (
    <section className="todo-list">
      <div
        style={{ paddingBottom: todos.length !== 0 ? "60px" : "35px" }}
        className="wrapper"
      >
        <h1 className="title">TODO LIST</h1>
        <Input createTask={createTask} />
        <Filter handleFilter={handleFilter} show={todos.length !== 0} />
        <div>
          <Todos
            todosData={todos}
            showData={filter}
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
