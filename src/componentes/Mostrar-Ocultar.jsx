// Importar React y el hook useState desde la biblioteca de React.
import React, { useState } from "react";
// Importar la hoja de estilos Mostrar-Ocultar.css desde la ubicación especificada.
import "../hojas-de-estilos/Mostrar-Ocultar.css";

// Definir el componente funcional MostrarOcultar.
function MostrarOcultar() {
  // Definir un estado llamado showPassword con valor inicial false utilizando el hook useState.
  const [showPassword, setShowPassword] = useState(false);

  // Definir la función togglePasswordVisibility que cambia el estado showPassword de true a false y viceversa.
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Retornar el JSX que compone el componente.
  return (
    <div className="mostrar-ocultar">
      
        {/* Input para la contraseña */}
        <input
          autoComplete="off"
          placeholder="Contraseña"
          className="campo-de-entrada-dos"
          minLength="7"
          maxLength="15"
          // Cambiar el tipo de input entre "text" y "password" basado en el estado showPassword.
          type={showPassword ? "text" : "password"}
        />
     
      
        {/* Checkbox para mostrar/ocultar la contraseña */}
        <input
          type="checkbox"
          id="mostrar-contrasena"
          // Asociar el evento onChange con la función togglePasswordVisibility.
          onChange={togglePasswordVisibility}
        />
        <label htmlFor="mostrar-contrasena">Mostrar Contraseña?</label>
      
    </div>
  );
}

// Exportar el componente MostrarOcultar para que pueda ser utilizado en otros archivos.
export default MostrarOcultar;
