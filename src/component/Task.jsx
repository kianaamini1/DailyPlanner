
import React from 'react';


function Task({ task, toggleTask, deleteTask, index }) {
  return (
    <div className="task-container">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
        className="task-checkbox"
      />
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
        {index + 1} 
      </span>
      <button className="remove-button" onClick={() => deleteTask(task.id)}>
        Remove
      </button>
    </div>
  );
}

export default Task;
