/**
 * Componente que contiene y carga el código html correspondiente al footer de la aplicación.
 */
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <span className="footer-container">
        <img
          src={"/images/union-europea.jpg"}
          className="logo-ue"
          alt="logo-ue"
        />
        <img
          src={"/images/concello-santiago.jpg"}
          className="logo-stgo"
          alt="logo-stgo"
        />
        <img
          src={"/images/logo_pequeno.png"}
          className="logo-teo"
          alt="logo-teo"
        />

        <img
          src={"/images/xunta-galicia.jpg"}
          className="logo-xunta"
          alt="logo-xunta"
        />
      </span>
    );
  }
}

export default Footer;
