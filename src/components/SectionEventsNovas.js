/**
 * Componente que contiene y muestra el conjunto de eventos seleccionados en una lista.
 */
import React from "react";
import EventoNovas from "./EventoNovas";
import PropTypes from "prop-types";

const SectionEventsNovas = props => (
  <ul className="events-container">
    {Object.keys(props.events)
      .filter(eventKey => {
        const actualDate = new Date();
        const eventDate = new Date(props.events[eventKey].date);
        return actualDate < eventDate;
      })
      .filter(eventKey => props.events[eventKey].visible)
      .map(eventKey => (
        <EventoNovas indice={eventKey} eventDetails={props.events[eventKey]} />
      ))}
  </ul>
);

SectionEventsNovas.propTypes = {
  events: PropTypes.object.isRequired
};

export default SectionEventsNovas;
