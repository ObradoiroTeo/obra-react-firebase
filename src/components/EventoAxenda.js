import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

class Evento extends React.Component {
  static propTypes = {
    eventDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    }).isRequired
  };
  goToEventDetails = event => {
    navigate(`/axenda/${this.props.eventDetails.name}`);
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

export default Evento;
