/**
 * Componente que contiene y muestra el conjunto de eventos seleccionados en una lista.
 */
import React from "react";
import EventoAxenda from "./EventoAxenda";

// En esta funcion hacemos una serie de filtrados para que se muestren unos eventos y otros no en la pagina de Axenda. 👇
// Primero hacemos un filtrado por la fecha usando (actualDate). Definida y explicada en App.
// Despues hacemos otro filtrado segun el valor de (visible).
// Por ultimo usamos un (.map) para aplicar las funciones anteriores a todos los eventos que entran en esta pagina.
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
