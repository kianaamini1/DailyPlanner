// App.js
import { useState } from 'react';
import './App.css';
import TextBox from './component/TextBox'; 
import Task from './component/Task'; 

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false }
  ]);

  
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  
  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <>
      <h1>Daily Planner</h1>
      <TextBox addTask={addTask} /> 
      <p>You have {remainingTasks} tasks remaining</p>
      <div>
        {tasks.map((task, index) => (
          <Task 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
            index={index} 
          />
        ))}
      </div>
    </>
  );
}

export default App;
