import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Admin extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Admin;
