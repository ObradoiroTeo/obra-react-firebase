import React from "react";

class Evento extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.events.eventoUno.name}</p>
        <img src="" alt="" />
        <p>{this.props.events.eventoUno.fecha}</p>
        <p>{this.props.events.eventoUno.desc}</p>
      </div>
    );
  }
}

export default Evento;
