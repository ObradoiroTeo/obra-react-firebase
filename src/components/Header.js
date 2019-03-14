/**
 * Componente que contiene y carga el código html correspondiente al header de la aplicación.
 */
import React from "react";
import { Link } from "@reach/router";

/*Este componente es la cabecera, en la cual se muestran los logos del concello. Además, en el "nav" están creados los
links para acceder a cada una de las secciones de la web */
class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="quarter">
          <Link to="/concelloteo" className="menu-item">

            <img
              src={"/images/logo_pequeno.png"}
              className="logo-container"
              alt="logo-teo"
            />
          </Link>
        </div>

        <nav className="menu">
          <Link to="/" className="menu-item">
            Inicio
          </Link>
          <Link to="/axenda" className="menu-item">
            Axenda
          </Link>
          <Link to="/novas" className="menu-item">
            Novas
          </Link>
          <Link to="/convocatorias" className="menu-item">
            Convocatorias
          </Link>
          <Link to="/infoteo" className="menu-item">
            InfoTeo
          </Link>
          <Link to="/admin" className="menu-item">
            Admin
          </Link>
          <Link to="/somosteo" className="menu-item">
            Somos Teo
          </Link>
        </nav>
        <div className="quarter" />
      </header>
    );
  }
}

export default Header;
