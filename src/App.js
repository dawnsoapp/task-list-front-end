import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TaskList from './components/TaskList.js';
import './App.css';

// const TASKS = [

//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

//make state to hold API call: useState(TASKS) --> useState(API_URL)
//2nd state for error handling: const [errorMsg, setErrorMsg] 
//axios.patch for updating + axios.delete for removing + .catch for error
//axios.patch(taskData + `/tasks/${props.id}`)
//.then(response) => setTaskData 30-36 OR setTaskData(onTaskUpdate)
//.catch(error) => setErrorMsg
//WE'RE DOING THE OPPOSITE : The GET is the inverse ->
//GET makes it so the UI changes based on the API BUT
//PATCH needs to make the API change based on the UI

const URL = 'https://task-list-api-c17.onrender.com/tasks';

const taskUpdate = (id, markComplete) => {
  const endPoint = markComplete ? 'mark_complete' : 'mark_incomplete';
  return axios.patch(`${URL}/${id}/${endPoint}`)
  .then((response) => {
    return (response.data);
  });
};

const App = () => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    getURL();
  });

  const getURL = () => {
    return axios.get(URL)
    .then((response) => {
      setTaskData(response.data);
    });
  };

  const onTaskUpdate = (id) => {
    const task = taskData.find(task => task.id === id);
    if (!task) {
      return Promise.resolve();
    }
    return taskUpdate(id, !task.isComplete)
    .then((newTask) => {
      setTaskData(taskData.map(task => {
        if (task.id === newTask.id){
          return newTask;
        }
        return task;
      }));
    });
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



//Questions:
//1. When accessing data.response from url, do we post a 'status' key-
// to attach to our isComplete, OR do we work with the keys-
//presented in the source code ('name' & 'message')

//2. Can we implement a helper function to update the data first THEN-
// call axios.patch and use that variable to update the url OR-
// is this all meant to happen within the update function?
//ex. Helper function
// Const helperApi = ()=> {
//   return axios.patch(uri/tasks)