import React from 'react';
import "../hojas-de-estilos/Login.css";
import MostrarOcultar from "./Mostrar-Ocultar";


function Login(handleClick) {
  return (
    <div>
      <header className="encabezado">
        <nav className="barra-navegador">
          <a href="/">Inicio</a>
          <a href="/">Acerca De...</a>
          <a href="/">Servicios</a>
          <a href="/">Contacto</a>
        </nav>
        <div className="buscar">
          <input type="text" placeholder="Buscar..." />
          <i className="lupa"></i>
        </div>
      </header>
      <div className="fondo"></div>
      <section className="inicio">
        <div className="contenido">
          <a href="/" className="Logo">¡Hola!</a>
          <h2>¡Bienvenido!</h2>
          <h3>A Nuestro Sitio Web</h3>
          <p>Hola!, eres nuevo por aqui?. Genial te explico de que trata nuestra pagina web!, Nuestra
            pagina sirve para que coloques tus tareas pendientes y cada vez que inicies sesion, podras
            visualizar que tareas tienes pendientes y cuales todavia no estan echas, mostrando el tiempo
            transcurrido que paso desde que creaste la tarea</p>
        </div>
        <div className="loguearse">
          <h2>Acceder</h2>
          <div className="entrada">
            <input type="text" className="input1" placeholder="Correo" required />
          </div>
          <MostrarOcultar />
          <div className="controlar">
            <label><input type="checkbox" />Recordar mi nombre de Usuario</label>
          </div>
          <div className='pregunta'>
            <a href="./{ContraseñaOlvidada}">¿Has olvidado tu contraseña?</a>
          </div>
          <div className="boton">
            <button className="btn" onClick={handleClick}>Iniciar Sesión</button>
          </div>
          <div className="registrate">
            <p>No tengo una cuenta...</p>
            <a href="/">Registrarte Aqui!</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
