import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const addTaskHandler = (text) => {
    setTasks([...tasks, {id: nextId++, text, done:false}])
  }
  const handleChangeTask = (task) => {
    setTasks(tasks.map(e => {
      if(e.id === task.id){
        return {
            ...e,
          text: task.text
        }
      }
      return e;
    }))
  }
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(e => e.id !== id))
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
