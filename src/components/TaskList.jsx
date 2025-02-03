import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changed, deleted } from '../redux/slices/todosSlice';

const TaskList = () => {
  const [isChangeMode, setIsChangeMode] = useState(null);
  const [updateTask, setUpdateTask] = useState('')
  const tasks = useSelector(state => state.todo)
  const dispatch = useDispatch();
  const saveHandler = (task) => {
    setIsChangeMode(null);
    let newTask = {
      ...task,
      text: updateTask
    }
      
    dispatch(changed(newTask))
  }
  const editTaskHandler = (task) => {
    setIsChangeMode(task.id)
    setUpdateTask(task.text)
  }
  return (
    <ul>
      {
        tasks.map(task => (
          <li key={task.id}>
            <input 
              type="checkbox" 
              checked={task.done} 
              onChange={() => dispatch(changed({...task, done: !task.done}))}
            />
            {
              isChangeMode === task.id
              ? 
              <>
                <input type="text" value={updateTask} onChange={e => setUpdateTask(e.target.value)} />
                <button onClick={() => saveHandler(task)}>Save</button>
              </>
              : 
              <>
                {task.text}
                <button onClick={() => editTaskHandler(task)}>Edit</button>
              </>
            }
            <button onClick={() => dispatch(deleted(task))}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}

export default TaskList;