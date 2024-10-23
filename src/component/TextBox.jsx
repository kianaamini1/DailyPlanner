
import React, { useState } from 'react';


function TextBox({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="New task" 
        className="task-input"
      />
      <button type="submit" className="save-button">Save</button>
    </form>
  );
}

export default TextBox;
