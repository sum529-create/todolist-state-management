import { useContext, useState } from 'react';
import { TodoDispatchContext } from '../context/todoContext';

const AddTask = () => {
  const [task, setTask] = useState('')
  const dispatch = useContext(TodoDispatchContext);
  const addTaskFunc = () => {
    dispatch({type:'added', id: nextId++, text:task})
    setTask('')
  }
  return (
    <>
      <input type="text" name="task" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={() => addTaskFunc()}>Add</button>
    </>
  )
}
let nextId = 3;
export default AddTask