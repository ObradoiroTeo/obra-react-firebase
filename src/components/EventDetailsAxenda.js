/**
 * Componente último que muestra detalladamente y de forma descriptiva cada uno de los eventos.
 *  Al pinchar en el evento cambia la sección eventos por la descripción del evento en sí.
 */
import React from "react";
import Header from "./Header";

/* Este componente muestra el nombre (name), la fecha (date_event), la imagen (image) y la descripción (desc) de cada uno de los eventos*/

// Aqui usamos (substring) para que la fecha se nos muestre como Dia-Mes-Año y no nos muestre la hora.
// Tambien usamos (__html) para que interprete ese contenido como HTML y no como caracteres de control.
const EventDetailsAxenda = props => (
  <div className="eventdetails-page">
    <div>
      <Header />
    </div>
    <div>
      <div className="event-container">
        <p className="details-name">
          {props.eventDetails.events[props.location.state.clave].name}
        </p>
        <p className="details-date">
          {props.eventDetails.events[
            props.location.state.clave
          ].date_event.substring(0, 10)}
        </p>

        <div className="details-container">
          <img
            src={props.eventDetails.events[props.location.state.clave].image}
            alt="img"
            className="details-img"
          />
          <p
            className="details-desc"
            dangerouslySetInnerHTML={{
              __html: props.eventDetails.events[props.location.state.clave].desc
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default EventDetailsAxenda;
