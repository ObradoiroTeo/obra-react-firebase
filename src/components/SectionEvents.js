import React from "react";
import Evento from "./Evento";
import PropTypes from "prop-types";

const SectionEvents = props => (
  <ul className="events">
    {Object.keys(props.events)
      .filter(eventKey => {
        const actualDate = new Date();
        const eventDate = new Date(props.events[eventKey].date);
        console.log(actualDate, eventDate, actualDate < eventDate);
        return actualDate < eventDate;
      })
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

// filtrar los eventos nada mas entrar (por la fecha)return
// NO mostrar lo que ya pasaron
