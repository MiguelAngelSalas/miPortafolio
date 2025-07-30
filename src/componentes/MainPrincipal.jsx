import React from "react";
import estilos from "../estilos/estiloMain.module.css";
import PasarelaProyectos from "./PasarelaProyectos";

const SECCIONES = {
  sobremi: "Sobre mí",
  proyectos: "Mis Proyectos",
  tecnologias: "Tecnologías",
  contacto: "Contacto",
};

const MainPrincipal = ({ seccion = "sobremi" }) => (
  <div className={estilos.mainContainer}>
    <section className={estilos.cuadroContenido}>
      <h2>{SECCIONES[seccion]}</h2>
      
      {seccion === "sobremi" && (
        <div>
          <p>¡Hola! Soy <strong>Miguel Ángel Salas</strong>, tengo 30 años y soy un Programador Junior especializado en <strong>Frontend</strong>.</p>
          
          <p>Tengo una sólida experiencia en atención al cliente y manejo de herramientas informáticas, adquirida durante varios años trabajando en entornos de ciber, donde me especialicé en trámites online, redacción y digitalización de documentos.</p>
          
          <p>Actualmente me estoy formando como programador con conocimientos en <strong>React, Python y Node.js</strong>, orientado a soluciones prácticas como automatización de tareas, desarrollo web y manejo de bases de datos locales.</p>
          
          <p>Me destaco por mi capacidad de aprendizaje, autonomía y atención al detalle. Tengo una fuerte orientación a resolver problemas de forma eficiente y busco crecer en un entorno donde pueda combinar mi experiencia en informática aplicada con el desarrollo de software.</p>
          
          <div>
            <h3>Formación:</h3>
            <p>📚 <strong>Tecnicatura en Programación</strong> - UnAB (2024-2025)</p>
            <p>💻 <strong>Curso de POO</strong> - HTML, CSS y JavaScript (2023)</p>
            <p>🎓 <strong>Título Secundario</strong> - CENS 454, Lomas de Zamora (2013-2016)</p>
          </div>
        </div>
      )}
      
      {seccion === "proyectos" && (
        <div>
          <p>Aquí puedes ver algunos de mis proyectos más destacados:</p>
          <PasarelaProyectos />
        </div>
      )}
      
      {seccion === "tecnologias" && (
        <div>
          <p>Estas son las tecnologías que manejo:</p>
          <div>
            <h3>Frontend:</h3>
            <p>React, JavaScript, HTML5, CSS3, Vite</p>
            
            <h3>Backend:</h3>
            <p>Node.js, Express, APIs REST</p>
            
            <h3>Herramientas:</h3>
            <p>Git, GitHub, VSCode, npm</p>
          </div>
        </div>
      )}
      
      {seccion === "contacto" && (
        <div>
          <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
          <div>
            <p>📧 Email: miguelsalas1994@outlook.com</p>
            <p>💼 LinkedIn: /Miguel-Angel-salas</p>
            <p>🐙 GitHub: /miguelangelsalas</p>
            <p>📱 Teléfono: 1123909529</p>
            <p>📍 Temperley, Buenos Aires</p>
          </div>
          <p>Estoy disponible para proyectos freelance y oportunidades laborales.</p>
        </div>
      )}
    </section>
  </div>
);

export default MainPrincipal;