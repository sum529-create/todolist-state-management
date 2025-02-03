import PropTypes from 'prop-types';
import { useState } from 'react';

const AddTask = ({addTaskHandler}) => {
  const [task, setTask] = useState('')
  const addTaskFunc = () => {
    addTaskHandler(task)
    setTask('')
  }
  return (
    <>
      <input type="text" name="task" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={() => addTaskFunc()}>Add</button>
    </>
  )
}

AddTask.propTypes = {
  addTaskHandler : PropTypes.func.isRequired
}

export default AddTask