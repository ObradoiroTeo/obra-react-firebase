/**
 * Componente último que muestra detalladamente y de forma descriptiva cada uno de los eventos.
 *  Al pinchar en el evento cambia la sección eventos por la descripción del evento en sí.
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

/* Este componente muestra el nombre (name), la fecha (date), la imagen (image) y la descripción (desc) de cada uno de los eventos*/

// Aqui usamos (substring) para que la fecha se nos muestre como Dia-Mes-Año y no nos muestre la hora.
// Tambien usamos (__html) para que interprete ese contenido como HTML y no como caracteres de control.
const EventDetailsNovas = props => (
  <div>
    <Header />
    <div className="event-container">
      <p className="details-name">{props.eventDetails.name}</p>
      <p className="details-date">{props.eventDetails.date}</p>
      <div className="details-container">
        <img src={props.eventDetails.image} alt="img" className="details-img" />
        <p className="details-desc">{props.eventDetails.desc}</p>
      </div>
    </div>
    <div className="empty-hack" />

    <Footer />
  </div>
);

export default EventDetailsNovas;
