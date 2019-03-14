import React from "react";
import { navigate } from "@reach/router";

class EventoNovas extends React.Component {
  goToEventDetails = eventKey => {
    navigate(`/novas/${this.props.eventDetails.name}`, {
      state: { clave: this.props.indice }
    });
  };
  render() {
    return (
      <button className="event-reduced" onClick={this.goToEventDetails}>
        <img
          className="event-image"
          src={this.props.eventDetails.image}
          alt="imagen"
        />
        <p className="event-date">{this.props.eventDetails.date}</p>

        <p className="event-name">{this.props.eventDetails.name}</p>
      </button>
    );
  }
}

export default EventoNovas;
