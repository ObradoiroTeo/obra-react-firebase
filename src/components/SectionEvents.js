import React from "react";
import Evento from "./Evento";
import PropTypes from "prop-types";

const SectionEvents = props => (
  <ul className="events">
    {Object.keys(props.events)
      .filter(eventKey => props.events[eventKey].visible)
      .map(eventKey => (
        <Evento key={eventKey} eventDetails={props.events[eventKey]} />
      ))}
  </ul>
);

SectionEvents.propTypes = {
  events: PropTypes.object.isRequired
};

export default SectionEvents;
