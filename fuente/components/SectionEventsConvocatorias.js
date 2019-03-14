import React from "react";
import EventoConvocatorias from "./EventoConvocatorias";

const SectionEventsConvocatorias = props => (
  <ul className="events-container">
    {Object.keys(props.events)
      .filter(eventKey => {
        const actualDate = new Date();
        const eventDate = new Date(
          props.events[eventKey].date_fin_convocatoria
        );
        return actualDate < eventDate;
      })
      .filter(eventKey => props.events[eventKey].visible)
      .map(eventKey => (
        <EventoConvocatorias
          indice={eventKey}
          eventDetails={props.events[eventKey]}
        />
      ))}
  </ul>
);

export default SectionEventsConvocatorias;
