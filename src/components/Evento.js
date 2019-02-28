import React from "react";
import PropTypes from "prop-types";

const Evento = props => (
  <button className="event-reduced">
    <img className="event-image" src={props.eventDetails.image} alt="imagen" />
    <p className="event-date">{props.eventDetails.date}</p>

    <p className="event-name">{props.eventDetails.name}</p>
    <p
      className="desc"
      dangerouslySetInnerHTML={{ __html: props.eventDetails.desc }}
    />
  </button>
);

Evento.propTypes = {
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default Evento;
