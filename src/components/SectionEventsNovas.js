/**
 * Componente que contiene y muestra el conjunto de eventos seleccionados en una lista.
 */
import React from "react";
import EventoNovas from "./EventoNovas";
import PropTypes from "prop-types";

// En esta funcion hacemos una serie de filtrados para que se muestren unos eventos y otros no en la pagina de Novas. 👇
// Primero hacemos un filtrado por la fecha usando (actualDate). Definida y explicada en App.
// Despues hacemos otro filtrado segun el valor de (visible).
// Por ultimo usamos un (.map) para aplicar las funciones anteriores a todos los eventos que entran en esta pagina.
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
