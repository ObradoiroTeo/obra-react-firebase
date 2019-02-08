import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Admin extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <h1>
        <Header />
        <button onClick={this.props.Sport}>Cargar archivos de Deporte</button>
        <button onClick={this.props.Culture}>Cargar archivos de Cultura</button>
        <button onClick={this.props.Avisos}>
          Cargar archivos de Avisos y Notificaciones
        </button>
        <Footer />
      </h1>
=======
      <div>
        <Header />
        <button className="fichero-deporte" onClick={this.props.Sport}>
          Cargar fichero deporte
        </button>
        <button className="fichero-cultura" onClick={this.props.Culture}>
          Cargar fichero cultura
        </button>
        <button className="fichero-avisos" onClick={this.props.Avisos}>
          Cargar fichero avisos
        </button>
        <Footer />
      </div>
>>>>>>> c595fcb324637fc1ccba064546d9ea84b03e13ee
    );
  }
}

export default Admin;
