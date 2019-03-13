/**
 * Componente que contiene y carga el código html correspondiente al footer de la aplicación.
 */
import React from "react";

/*En el Footer están las imágenes correspondientes a los logos de la Unión Europea, del Concello de Santiago, el de Teo y el de la Xunta de Galicia */
class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <span className="footer">
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
      </div>
    );
  }
}

export default Footer;
