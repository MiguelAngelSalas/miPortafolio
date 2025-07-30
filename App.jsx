import { useState } from "react";
import PanelBotones from "./src/componentes/PanelBotones";
import FotoPerfil from "./src/componentes/FotoPerfil";
import Main from "./src/componentes/MainPrincipal";
import "./App.css";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("sobremi");

  const cambiarSeccion = (nuevaSeccion) => {
    setSeccionActiva(nuevaSeccion);
  };

  return (
    <>
      <PanelBotones 
        seccionActiva={seccionActiva} 
        onCambiarSeccion={cambiarSeccion} 
      />
      <Main seccion={seccionActiva} />
      <FotoPerfil />
    </>
  );
}

export default App;