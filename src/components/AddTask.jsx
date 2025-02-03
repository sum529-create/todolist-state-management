import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { added } from '../redux/slices/todosSlice';

const AddTask = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch();
  const addTaskFunc = () => {
    dispatch(added(task))
    setTask('')
  }
  return (
    <>
      <input type="text" name="task" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={() => addTaskFunc()}>Add</button>
    </>
  )
}
export default AddTask