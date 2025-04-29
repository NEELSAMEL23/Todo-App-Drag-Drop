import React, { useState } from 'react';
import TaskBoard from './components/TaskBoard';
import TaskInput from './components/TaskInput';

const App = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: [],
  });

  const addTask = (newTask) => {
    setTasks((prev) => ({
      ...prev,
      [newTask.status]: [...prev[newTask.status], newTask],
    }));
  };

  const updateTasks = (newTasks) => setTasks(newTasks);

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">TaskTrek Board 🚀</h1>
      <TaskInput addTask={addTask} />
      <TaskBoard tasks={tasks} setTasks={updateTasks} />
    </div>
  );
};

export default App;