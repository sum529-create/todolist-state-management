import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { todoReducer } from "./reducers/todoReducer";
import { TodoContext, TodoDispatchContext } from "./context/todoContext";

function App() {
  const [tasks, dispatch] = useReducer(todoReducer,initialTasks);
  return (
    <>
      <TodoContext.Provider value={tasks}>
        <TodoDispatchContext.Provider value={dispatch}>
          <h2>My TodoList-useReducer</h2>
          <AddTask/>
          <TaskList/>
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </>
  )
}
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]
export default App
