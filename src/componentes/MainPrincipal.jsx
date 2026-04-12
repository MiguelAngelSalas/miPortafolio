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
          <p>¡Hola! Soy <strong>Miguel Ángel Salas</strong>, estudiante de 3er año de la Tecnicatura en Programación y <strong>Desarrollador Full Stack Junior</strong>.</p>
          
          <p>Cuento con experiencia comprobable en <strong>Soporte IT y Atención al Cliente</strong>, gestionando requerimientos técnicos, creación de cuentas y resolución de problemas para usuarios finales en tiempo real.</p>
          
          <p>En el ámbito del desarrollo, me especializo en la creación de aplicaciones web modernas y plataformas SaaS. Actualmente construyo soluciones escalables utilizando el ecosistema de <strong>React, Next.js y Tailwind CSS</strong> en el Frontend, respaldado por bases de datos relacionales como <strong>PostgreSQL</strong> mediante Prisma ORM.</p>
          
          <p>Me destaco por mi capacidad de aprendizaje rápido, mi autonomía para resolver bugs complejos y la integración de herramientas de Inteligencia Artificial para acelerar y optimizar los flujos de desarrollo.</p>
          
          <div className={estilos.formacionBox}>
            <h3>Formación:</h3>
            <p>📚 <strong>Tecnicatura Universitaria en Programación</strong> - UNaB (En curso - 3er año)</p>
            <p>💻 <strong>Desarrollo Web Full Stack & Bases de Datos</strong> - Autodidacta / Proyectos Prácticos</p>
            <p>🎓 <strong>Título Secundario</strong> - CENS 454, Lomas de Zamora</p>
          </div>
        </div>
      )}
      
      {seccion === "proyectos" && (
        <div>
          <p>He diseñado, desarrollado y desplegado en producción aplicaciones full-stack, destacando plataformas como <strong>Clipp.com.ar</strong> (SaaS para gestión de barberías) y <strong>Multi-Foto</strong> (herramienta de procesamiento de imágenes).</p>
          <p>Aquí puedes explorar mi trabajo:</p>
          <PasarelaProyectos />
        </div>
      )}
      
      {seccion === "tecnologias" && (
        <div>
          <p>Evoluciono constantemente mi stack para adaptarme a los estándares actuales de la industria:</p>
          
          <div>
            <h3>🚀 Frontend & UI:</h3>
            <p>Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3</p>
            
            <h3>⚙️ Backend & Base de Datos:</h3>
            <p>PostgreSQL, Prisma ORM, Neon DB, Node.js, NextAuth / JWT (bcrypt)</p>
            
            <h3>🐍 Automatización & Scripting:</h3>
            <p>Python, Selenium, BeautifulSoup (Web Scraping)</p>
            
            <h3>🛠️ Herramientas & DevOps:</h3>
            <p>Git, GitHub, Vercel, Integración de APIs de IA</p>
          </div>
        </div>
      )}
      
      {seccion === "contacto" && (
        <div>
          <p>¿Tienes un proyecto en mente o buscas sumar un Junior con empuje a tu equipo? ¡Hablemos!</p>
          <div>
            <p>📧 Email: miguelsalas1994@outlook.com</p>
            <p>💼 LinkedIn: /Miguel-Angel-salas</p>
            <p>🐙 GitHub: /MiguelAngelSalas</p>
            <p>📱 Teléfono: 1123909529</p>
            <p>📍 Lomas de Zamora, Buenos Aires</p>
          </div>
          <p>Estoy disponible para oportunidades laborales y desarrollo de proyectos freelance.</p>
        </div>
      )}
    </section>
  </div>
);

export default MainPrincipal;