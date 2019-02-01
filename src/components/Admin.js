import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Admin extends React.Component {
  render() {
    return (
      <div className="cargar">
        <Header />
        <button onClick={this.props.Avisos}>Cargar Avisos</button>
        <button onClick={this.props.Cultura}>Cargar Cultura</button>
        <button onClick={this.props.Deportes}>Cargar Deportes</button>
        <Footer />
      </div>
    );
  }
}

export default Admin;
