import React from "react";
import estilos from "../estilos/fotoPerfil.module.css";
import fotoPerfil from "../assets/fotoPerfil.png"; // Cambia el path por el de tu foto

const FotoPerfil = () => (
  <div className={estilos.fotoPerfilContainer}>
    <img src={fotoPerfil} alt="Mi foto de perfil" className={estilos.fotoPerfilImg} />
  </div>
);

export default FotoPerfil;