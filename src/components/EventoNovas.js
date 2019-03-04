import React from "react";
import PropTypes from "prop-types";
import { navigate, navigation } from "@reach/router";

class EventoNovas extends React.Component {
  static PropTypes = {
    eventDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    }).isRequired
  };
  goToEventDetails = event => {
    navigate(`/novas/${this.props.indice}`, {
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
        <p>{this.props.nombre}</p>
        <p className="event-date">{this.props.eventDetails.date}</p>

        <p className="event-name">{this.props.eventDetails.name}</p>
      </button>
    );
  }
}

export default EventoNovas;
