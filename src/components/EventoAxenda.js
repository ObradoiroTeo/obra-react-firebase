import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

<<<<<<< HEAD
const Evento = props => (
  <button className="event-reduced">
    <img className="event-image" src={props.eventDetails.image} alt="imagen" />
    <p className="event-date">
      {props.eventDetails.date_event.substring(0, 10)}
    </p>
    <p className="event-name">{props.eventDetails.name}</p>
    <p
      className="desc"
      dangerouslySetInnerHTML={{ __html: props.eventDetails.desc }}
    />
  </button>
);
=======
class EventoAxenda extends React.Component {
  static propTypes = {
    eventDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    }).isRequired
  };

  goToEventDetails = eventKey => {
    navigate(`/axenda/${this.props.eventDetails.name}`);
  };
>>>>>>> 495cbe80b85f6b5ed00dfa484509d3a8cecbe72e

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
