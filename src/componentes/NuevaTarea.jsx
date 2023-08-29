//Crear una nueva tarea:
// Implementar un formulario en el frontend para ingresar el título y la descripción
// de la nueva tarea
import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
     <p> <label>
        Titulo:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label></p>
      <p><label>
        Descripcion:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label></p>
      <button type="submit">Agregar tarea</button>
    </form>
  );
};


