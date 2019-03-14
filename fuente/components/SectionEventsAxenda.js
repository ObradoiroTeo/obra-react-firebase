import React from "react";
import EventoAxenda from "./EventoAxenda";

const SectionEventsAxenda = props => (
  <ul className="events-container">
    {Object.keys(props.events)
      .filter(eventKey => {
        const actualDate = new Date();
        const eventDate = new Date(props.events[eventKey].date_event);
        return actualDate < eventDate;
      })
      .filter(eventKey => props.events[eventKey].visible)
      .map(eventKey => (
        <EventoAxenda indice={eventKey} eventDetails={props.events[eventKey]} />
      ))}
  </ul>
);

export default SectionEventsAxenda;
