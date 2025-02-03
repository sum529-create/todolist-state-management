import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { todoReducer } from "./reducers/todoReducer";

function App() {
  const [tasks, dispatch] = useReducer(todoReducer,initialTasks);
  const addTaskHandler = (text) => {
    dispatch({type:'added', id: nextId++, text, done:false})
  }
  const handleChangeTask = (task) => {
    dispatch({type:'changed', task:task})
  }
  const handleDeleteTask = (id) => {
    dispatch({type:'deleted', id})
  }
  return (
    <>
      <h2>My TodoList-useReducer</h2>
      <AddTask addTaskHandler={addTaskHandler}/>
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  )
}
let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]
export default App
