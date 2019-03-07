import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
