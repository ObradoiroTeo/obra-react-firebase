import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Admin extends React.Component {
  render() {
    return (
      <h1>
        <Header />
        <button onClick={this.props.Sport}>Cargar archivos de Deporte</button>
        <button onClick={this.props.Culture}>Cargar archivos de Cultura</button>
        <button onClick={this.props.Avisos}>
          Cargar archivos de Avisos y Notificaciones
        </button>
        <Footer />
      </h1>
    );
  }
}

export default Admin;
