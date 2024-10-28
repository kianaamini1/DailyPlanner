import { useState } from 'react';
import './App.css';
import TextBox from './component/TextBox';
import Task from './component/Task';
import FilterButtons from './component/FilterButtons';  

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false }
  ]);
  const [filter, setFilter] = useState('all');
  const [recentlyRemoved, setRecentlyRemoved] = useState([]);

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
    
    const taskToRemove = tasks.find(task => task.id === id);
    if (taskToRemove) {
      setTasks(tasks.filter(task => task.id !== id)); 
      setRecentlyRemoved([...recentlyRemoved, taskToRemove]);
    }
  };

  const remainingTasks = tasks.filter(task => !task.completed).length;

  const filteredTasks = filter === 'recentlyRemoved'
    ? recentlyRemoved
    : tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
      });

  return (
    <>
      <h1>Daily Planner</h1>
      <TextBox addTask={addTask} />
      <FilterButtons currentFilter={filter} setFilter={setFilter} />
      <p>You have {remainingTasks} tasks remaining</p>

      
      <div>
        {filteredTasks.map((task, index) => (
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
