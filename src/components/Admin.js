/**
 * Componente interno al que accede el administrador por url y desde el que se cargan los ficheros
 * con la información a mostrar en los eventos.
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Ventana en la que podemos cargar los evento de Axenda Novas Y Convocatorias en caso de que no funcione la url con los JSON.
class Admin extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="load-buttons-container">
          <button className="load-buttons" onClick={this.props.Novas}>
            Cargar fichero Novas
          </button>
          <button className="load-buttons" onClick={this.props.Axenda}>
            Cargar fichero axenda
          </button>
          <button className="load-buttons" onClick={this.props.Convocatorias}>
            Cargar fichero convocatorias
          </button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Admin;
