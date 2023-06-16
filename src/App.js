import React, {useState} from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [

  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS);

  const onTaskUpdate = (id) => {
    setTaskData(() => taskData.map((task) => {
      if(task.id === id) {
        return {...task, isComplete: !task.isComplete};
      } else {
        return task;
      }
    }));
  };

  const onTaskDelete = (id) => {
    setTaskData(() => taskData.filter((task) => {
      return task.id !== id;
    }));
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={taskData} onTaskUpdate={onTaskUpdate} onTaskDelete={onTaskDelete}/></div>
      </main>
    </div>
  );
};

export default App;
