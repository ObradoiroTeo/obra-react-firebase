/**
 * Componente último que muestra detalladamente y de forma descriptiva cada uno de los eventos.
 *  Al pinchar en el evento cambia la sección eventos por la descripción del evento en sí.
 */
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

/* Este componente muestra el nombre (name), la fecha (date), la imagen (image) y la descripción (desc) de cada uno de los eventos*/

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

EventDetailsNovas.propTypes = {
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default EventDetailsNovas;
