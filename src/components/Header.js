import React from "react";
import concelloTeo from "../images/logo_pequeno.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="vacio">
          <img src={concelloTeo} className="logo" alt="logo-teo" />
        </div>
        <div className="menu">
          <button className="anchor">Inicio</button>
          <button className="anchor">Cultura</button>
          <button className="anchor">Deporte</button>
          <button className="anchor">Avisos</button>
          <button className="anchor">InfoTeo</button>
        </div>
        <div className="vacio" />
      </div>
    );
  }
}

export default Header;
