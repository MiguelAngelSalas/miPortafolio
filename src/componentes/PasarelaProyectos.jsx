import React, { useState } from "react";
import estilos from "../estilos/pasarelaProyectos.module.css";

const PasarelaProyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "CLIPP // Gestión de Turnos y Cobros",
      descripcion: "Sistema integral SaaS para barberías y centros médicos. Incluye dashboard administrativo, gestion de cobros, gestión de staff y sistema de turnos dinámico con validación.",
      tecnologias: "Next.js • PostgreSQL • Prisma ORM • Auth.js • Neon DB • Resend API • Despliegue en Vercel",
      imagen: "/gestion-turnos/Dashboard.png",
      github: "https://github.com/MiguelAngelSalas/clipp",
      demo: "https://clipp.com.ar"
    },
    {
      id: 2,
      titulo: "MULTI-FOTO // Procesamiento con IA",
      descripcion: "Herramienta desarrollada para facilitar la creación de PDFs imprimibles. Incluye integración con IA para remover fondos (PNG) sin perder calidad. Ideal para stickers y fotos 4x4.",
      tecnologias: "Next.js • React-Cropper.",
      imagen: "/multi-foto/multifoto.png",
      github: "https://github.com/MiguelAngelSalas/multifoto",
      demo: "https://multifoto.vercel.app/",
    },
    {
      id: 3,
      titulo: "IMPRESIONES A TU CASA // E-commerce",
      descripcion: "Aplicación de logística de impresión. Los clientes gestionan su carrito, eligen tipo de papel y envían pedidos. Los archivos PDF se procesan en Cloudinary para una gestión rápida de la compra.",
      tecnologias: "React + Vite • Cloudinary • Node.js • Desplegado en Vercel.",
      imagen: "/impresionesATuCasa/dashboard.png",
      github: "https://github.com/MiguelAngelSalas/impresionesatucasa",
      demo: "https://impresionesatucasa.com.ar",
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
      {/* Navegación superior: Flechas y contador */}
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

      {/* Card del proyecto actual */}
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
          <a 
            href={proyecto.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={estilos.botonLink}
          >
            GitHub
          </a>
          <a 
            href={proyecto.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={estilos.botonLink}
          >
            Ver Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasarelaProyectos;