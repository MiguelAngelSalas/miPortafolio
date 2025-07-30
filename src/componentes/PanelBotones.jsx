import React from "react";
import Boton from "./Boton";
import estilos from "../estilos/estiloNav.module.css";

const PanelBotones = ({ seccionActiva, onCambiarSeccion, className, children }) => {
  return (
    <main className={estilos.navContainer}>
      <Boton 
        texto="Sobre mí" 
        onClick={() => onCambiarSeccion("sobremi")}
      />
      <Boton 
        texto="Mis proyectos" 
        onClick={() => onCambiarSeccion("proyectos")}
      />
      <Boton 
        texto="Tecnologías" 
        onClick={() => onCambiarSeccion("tecnologias")}
      />
      <Boton 
        texto="Contacto" 
        onClick={() => onCambiarSeccion("contacto")}
      />
    </main>
  );
};

export default PanelBotones;