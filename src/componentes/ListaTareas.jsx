// src/components/TaskList.js
import React from 'react';
import Task from './Tarea';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
