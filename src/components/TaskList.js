import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ taskData, onTaskUpdate }) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onTaskUpdate={onTaskUpdate}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(taskData)}</ul>;
};

TaskList.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskUpdate: PropTypes.func.isRequired
};

export default TaskList;
