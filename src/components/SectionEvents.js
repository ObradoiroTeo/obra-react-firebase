import React from "react";
import Evento from "./Evento";
import PropTypes from "prop-types";

const SectionEvents = props => (
  <ul className="events">
    {Object.keys(props.events).map(eventKey => (
      <Evento key={eventKey} eventDetails={props.events[eventKey]} />
    ))}
  </ul>
);

SectionEvents.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.object.isRequired
};

export default SectionEvents;
