import PropTypes from 'prop-types';
import { useState } from 'react';

const TaskList = ({tasks, onChangeTask, onDeleteTask}) => {
  const [isChangeMode, setIsChangeMode] = useState(null);
  const [updateTask, setUpdateTask] = useState('')
  const saveHandler = (task) => {
    setIsChangeMode(null);
    let newTask = {
      ...task,
      text: updateTask
    }
      
    onChangeTask(newTask)
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
              onChange={() => onChangeTask({...task, done: !task.done})}
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
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  })).isRequired,
  onChangeTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};

export default TaskList;