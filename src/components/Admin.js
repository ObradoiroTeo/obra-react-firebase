import React from "react";

class Admin extends React.Component {
  render() {
    return (
      <div className="cargar">
        <button onClick={this.props.Avisos}>Cargar Avisos</button>
        <button onClick={this.props.Cultura}>Cargar Cultura</button>
        <button onClick={this.props.Deportes}>Cargar Deportes</button>
      </div>
    );
  }
}

export default Admin;
