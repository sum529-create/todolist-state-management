import { Provider } from "react-redux";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import store from "./redux/config/configStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <h2>My TodoList-RTK</h2>
        <AddTask/>
        <TaskList/>
      </Provider>
    </>
  )
}
export default App
