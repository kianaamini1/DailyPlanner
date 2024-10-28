import React from 'react';
import '../App.css';

function Task({ task, toggleTask, deleteTask }) {
  return (
    <div className="task-container">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
        className="task-checkbox"
      />
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      <button className="remove-button" onClick={() => deleteTask(task.id)}>
        Remove
      </button>
    </div>
  );
}

export default Task;
