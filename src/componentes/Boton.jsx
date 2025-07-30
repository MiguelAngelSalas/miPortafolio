import React from "react";
import estiloBoton from "../estilos/estiloBoton.module.css";

export default function Boton({ className, onClick, texto }) {
  return (
    <button className={estiloBoton.estiloBoton} onClick={onClick}>
      {texto}
    </button>
  );
}