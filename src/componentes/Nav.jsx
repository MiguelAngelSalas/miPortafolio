import React from "react";
import estilos from "../estilos/estiloNav.module.css";

const Nav = ({ children, className }) => {
  return (
    <nav className={`${estilos.navContainer} ${className || ''}`}>
      {children}
    </nav>
  );
};

export default Nav;