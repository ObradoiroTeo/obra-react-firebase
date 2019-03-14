import React from "react";
import { navigate } from "@reach/router";

class EventoAxenda extends React.Component {
  goToEventDetails = eventKey => {
    navigate(`/axenda/${this.props.eventDetails.name}`, {
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
        <p className="event-date">
          {this.props.eventDetails.date_event.substring(0, 10)}
        </p>
        <p className="event-name">{this.props.eventDetails.name}</p>
      </button>
    );
  }
}
export default EventoAxenda;
