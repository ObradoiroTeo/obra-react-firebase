import React from "react";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="quarter">
          <img
            src={"/images/logo_pequeno.png"}
            className="logo-container"
            alt="logo-teo"
          />
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
        </nav>
        <div className="quarter" />
      </header>
    );
  }
}

export default Header;
