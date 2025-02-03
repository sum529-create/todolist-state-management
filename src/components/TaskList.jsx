import { useContext, useState } from 'react';
import { TodoContext, TodoDispatchContext } from '../context/todoContext';

const TaskList = () => {
  const [isChangeMode, setIsChangeMode] = useState(null);
  const [updateTask, setUpdateTask] = useState('')
  const tasks = useContext(TodoContext)
  const dispatch = useContext(TodoDispatchContext);
  const saveHandler = (task) => {
    setIsChangeMode(null);
    let newTask = {
      ...task,
      text: updateTask
    }
      
    dispatch({type:'changed', task:newTask})
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
              onChange={() => dispatch({type:'changed', task:{...task, done: !task.done}})}
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
            <button onClick={() => dispatch({type:'deleted', id:task.id})}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}

export default TaskList;