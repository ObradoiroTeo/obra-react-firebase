import React from "react";
import { navigate } from "@reach/router";

class EventoConvocatorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfs: this.props.eventDetails.pdfs
    };
  }
  goToEventDetails = eventKey => {
    navigate(`/convocatorias/${this.props.eventDetails.name}`, {
      state: { clave: this.props.indice }
    });
  };
  render() {
    return (
      <ul>
        <button className="event-reduced" onClick={this.goToEventDetails}>
          +
          <img
            className="event-image"
            src={this.props.eventDetails.image}
            alt="imagen"
          />
          <p>{this.props.nombre}</p>
          <p className="event-date">
            {this.props.eventDetails.date_fin_convocatoria.substring(0, 10)}
          </p>
          <p className="event-name">{this.props.eventDetails.name}</p>
        </button>
      </ul>
    );
  }
}

export default EventoConvocatorias;
