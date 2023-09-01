// src/components/Task.js
import React from 'react';
//import NuevaTarea from "../hojas-de-estilos/NuevaTarea.css";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(task.id)}>
      <span style={{ cursor: 'pointer' }}>
        {task.completed ? '👍' : '🤔'} {task.text}
</span>
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;

