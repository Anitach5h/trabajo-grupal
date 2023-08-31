//Crear una nueva tarea:
// Implementar un formulario en el frontend para ingresar el título y la descripción
// de la nueva tarea
import React, { useState } from 'react';
import "../hojas-de-estilos/NuevaTarea.css";

export function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aca despues iria la parte para guardar la tarea en el backend o en el estado global de la aplicación
    // Por ejemplo,enviar una solicitud a la API o actualizar el estado en el componente principal

    // Luego reiniciar los campos del formulario
    setTitle('');
    setDescription('');
  };

  return (
    <div className='contenedor-principal'>
      <div className='contenedor-interno'>
        <h1 className='titulo1'>Control de Tareas</h1>
        <form onSubmit={handleSubmit} className='formulario'>
          <label>
            <p id='titulo2'>Titulo de la nueva tarea:</p>
            <input type="text" value={title} onChange={handleTitleChange} className='texto' />
          </label>
          <label>
            <p id='titulo2'> Descripcion:</p>
            <textarea value={description} onChange={handleDescriptionChange} className='area-texto' />
          </label>
          <button type="submit" className='boton'>Agregar tarea</button>
        </form>
      </div>
    </div>
  );
};


