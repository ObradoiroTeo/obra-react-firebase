/**
 * Define de qué va a ser cada evento y que va a informar.
 * Está conectado a Convocatorias para poder obtener la información oportuna.
 * De SectionEventsConvocatorias sale EventoConvocatorias.
 */

import React from "react";
import EventoConvocatorias from "./EventoConvocatorias";
import PropTypes from "prop-types";

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

SectionEventsConvocatorias.propTypes = {
  events: PropTypes.object.isRequired
};

export default SectionEventsConvocatorias;
