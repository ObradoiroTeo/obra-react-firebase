import React from "react";
import PropTypes from "prop-types";

const Evento = props => (
  <div>
    <p>{props.eventDetails.name}</p>
    <img src="" alt="" />
    <p>{props.eventDetails.date}</p>
    <p>{props.eventDetails.desc}</p>
  </div>
);

Evento.propTypes = {
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default Evento;
