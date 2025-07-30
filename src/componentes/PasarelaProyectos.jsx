import React, { useState } from "react";
import estilos from "../estilos/pasarelaProyectos.module.css";

const PasarelaProyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Sistema de Gestión de Turnos",
      descripcion: "Sistema completo de gestión de turnos médicos con interfaz de administrador, estadísticas por localidad, registro de usuarios y base de datos SQLite. Incluye dashboard administrativo, formularios de registro y sistema de autenticación.",
      tecnologias: "Python • Tkinter • SQLite • Pandas • Matplotlib",
      imagen: "/src/assets/gestion-turnos/bienvenida.png",
      github: "https://github.com/miguelangelsalas/Grupo-6---Pandas-main",
      demo: "#"
    },
    {
      id: 2,
      titulo: "Portfolio Personal",
      descripcion: "Sitio web personal desarrollado con React y CSS Modules",
      tecnologias: "React • CSS Modules • Vite",
      imagen: "/src/assets/ejemplo.jpeg",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      titulo: "App de Tareas",
      descripcion: "Aplicación para gestionar tareas diarias con interfaz intuitiva",
      tecnologias: "JavaScript • HTML5 • CSS3",
      imagen: "/src/assets/ejemplo.jpeg",
      github: "#",
      demo: "#"
    }
  ];

  const [proyectoActual, setProyectoActual] = useState(0);

  const siguienteProyecto = () => {
    setProyectoActual((prev) => (prev + 1) % proyectos.length);
  };

  const proyectoAnterior = () => {
    setProyectoActual((prev) => (prev - 1 + proyectos.length) % proyectos.length);
  };

  const proyecto = proyectos[proyectoActual];

  return (
    <div className={estilos.pasarelaContainer}>
      <div className={estilos.navegacion}>
        <button onClick={proyectoAnterior} className={estilos.botonNav}>
          ← Anterior
        </button>
        <span className={estilos.contador}>
          {proyectoActual + 1} / {proyectos.length}
        </span>
        <button onClick={siguienteProyecto} className={estilos.botonNav}>
          Siguiente →
        </button>
      </div>

      <div className={estilos.proyectoCard}>
        <h3 className={estilos.titulo}>{proyecto.titulo}</h3>
        
        <div className={estilos.imagenContainer}>
          <img 
            src={proyecto.imagen} 
            alt={proyecto.titulo}
            className={estilos.imagen}
          />
        </div>
        
        <p className={estilos.tecnologias}>{proyecto.tecnologias}</p>
        
        <p className={estilos.descripcion}>{proyecto.descripcion}</p>
        
        <div className={estilos.botones}>
          <a href={proyecto.github} className={estilos.botonLink}>GitHub</a>
          <a href={proyecto.demo} className={estilos.botonLink}>Ver Demo</a>
        </div>
      </div>
    </div>
  );
};

export default PasarelaProyectos;