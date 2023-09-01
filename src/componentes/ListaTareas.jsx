import React from 'react';
//import Task from './Tarea';

const TaskList = ({
  tasks,
  toggleTask,
  deleteTask,
  editingTaskId,
  handleTaskEdit,
  editTask,
}) => {
  const handleKeyDown = (taskId, event) => {
    if (event.key === 'Enter') {
      handleTaskEdit(taskId, event.target.value);
      editTask(null); // Terminar la edición
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          {editingTaskId === task.id ? (
            <input
              type="text"
              value={task.text}
              onChange={(e) => handleTaskEdit(task.id, e.target.value)}
              onKeyDown={(e) => handleKeyDown(task.id, e)}
            />
          ) : (
            <>
              <span
                className={task.completed ? 'completed' : ''}
                onClick={() => toggleTask(task.id)}
                style={{ cursor: 'pointer' }}
              >
                {task.completed ? '👍' : '🤔'} {task.text}
              </span>
              <button onClick={() => editTask(task.id)}>Editar</button>
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;

