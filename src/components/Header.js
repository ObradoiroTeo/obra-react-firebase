import React from "react";
import concelloTeo from "../images/logo_pequeno.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="quarter">
          <img src={concelloTeo} className="logo-container" alt="logo-teo" />
        </div>
        <div className="menu">
          <button className="menu-item">Inicio</button>
          <button className="menu-item">Cultura</button>
          <button className="menu-item">Deporte</button>
          <button className="menu-item">Avisos</button>
          <button className="menu-item">InfoTeo</button>
        </div>
        <div className="quarter" />
      </header>
    );
  }
}

export default Header;
