/**
 * Define de qué va a ser cada evento y que va a informar.
 * Está conectado a Convocatorias para poder obtener la información oportuna.
 * De SectionEventsConvocatorias sale EventoConvocatorias.
 */
import React from "react";
import EventoConvocatorias from "./EventoConvocatorias";

// En esta funcion hacemos una serie de filtrados para que se muestren unos eventos y otros no en la pagina de Convocatorias. 👇
// Primero hacemos un filtrado por la fecha usando (actualDate). Definida y explicada en App.
// Despues hacemos otro filtrado segun el valor de (visible).
// Por ultimo usamos un (.map) para aplicar las funciones anteriores a todos los eventos que entran en esta pagina.
const SectionEventsConvocatorias = props => (
  <ul className="convocatoria-container">
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
