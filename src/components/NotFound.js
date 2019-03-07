/**
 * Componente que se muestra cuando una url dentro del sitio web no existe.
 */

import React from "react";
import { Link } from "@reach/router";

//Componente sencillo que en caso de salir a una url que no esta definida nos muestra una pagina con un boton para volver a la pagina de inicio.
const NotFound = props => (
  <>
    <div className="emptywhite-hack" />
    <div className="notfound-container">
      <h2 className="nf-text">Erro 404! Páxina non atopada!</h2>
      <div className="empty-hack" />
      <nav className="return-home">
        <Link to="/" className="link-container">
          Volver ó inicio
        </Link>
      </nav>
    </div>
  </>
);

export default NotFound;
