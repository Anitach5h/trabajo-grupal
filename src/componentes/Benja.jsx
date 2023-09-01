import React, { useState } from 'react';
import TaskList from './ListaTareas';
import BarraBusqueda from './BarraBusqueda'

function Benja ()  {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null); // Agrega el estado para edición

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
    setFilteredTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleTaskEdit = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const editTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleSearch = (searchParams) => {
    const filtered = tasks.filter((task) => {
      return (
        task.text.toLowerCase().includes(searchParams.query.toLowerCase()) &&
        (searchParams.completed ? task.completed : true)
      );
    });

    setFilteredTasks(filtered);
  };

  const handleKeyDown = (taskId, event) => {
    if (event.key === 'Enter') {
      handleTaskEdit(taskId, event.target.value);
      setEditingTaskId(null); // Terminar la edición
    }
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <div style={pageStyle}>
        <BarraBusqueda onSearch={handleSearch} />
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editingTaskId={editingTaskId}
        handleTaskEdit={handleTaskEdit}
        editTask={editTask}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
};

const pageStyle = {
  marginTop: '20px',
};

export default Benja;
















