/**
 * Componente interno al que accede el administrador por url y desde el que se cargan los ficheros
 * con la información a mostrar en los eventos.
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <button className="fichero-novas" onClick={this.props.Novas}>
          Cargar fichero Novas
        </button>
        <button className="fichero-axenda" onClick={this.props.Axenda}>
          Cargar fichero axenda
        </button>
        <button
          className="fichero-convocatorias"
          onClick={this.props.Convocatorias}
        >
          Cargar fichero convocatorias
        </button>
        <Footer />
      </div>
    );
  }
}

export default Admin;
