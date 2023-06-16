import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const [complete, setComplete] = useState(isComplete);
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => props.onTaskUpdate(props.id)}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  ); 
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onTaskUpdate: PropTypes.func.isRequired
};

export default Task;
// <<<<<<< HEAD

// 1.What props does Task have? Where do they come from?
// id, title, isComplete.
// comes from parent const TASKS 

// How would the code change if {id, title, isComplete} were replaced with props
// doesn't matter
// const SayHello = (props) => {
//   return <p>{props.greeting}, {props.name}!</p>
// };



// // What props does TaskList have? Where do they come from?
// TaskList has tasks as a props and comes from Task.js


// // Where is the function getTaskListJSX called in TaskList?
// // In componenet tasklist

// // How would the code change without this helper function?
// wouldn't be able to be defined
// wouldn't be able to make a list to accees index item
// we wouldnt be able to use the array map?

// What component is TASKS passed to in App?
// being called within TaskList

// How does the component pass TASKS?
// tasklist passes tasks to make individual tasks the app wants and formats it to make it nice

// What element is the component wrapped in?
{/* <div> element</div> */}
