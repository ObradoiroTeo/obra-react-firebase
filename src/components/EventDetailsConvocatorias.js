/**
 * Describe los detalles de cada uno de los eventos cuya información está guardada en Firebase y que posteriormente vendrá dada directamente desde una URL.
 * Está conectado  con App en donde se cargarían el JSON para poder obtener los datos.
 */

import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const EventDetailsConvocatorias = props => (
  <div>
    <Header />
    <div className="event-container">
      <p className="details-name">
        {props.eventDetails.events[props.location.state.clave].name}
      </p>
      <p className="details-date">
        {props.eventDetails.events[
          props.location.state.clave
        ].date_fin_convocatoria.substring(0, 10)}
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
    <div className="empty-hack" />
    <Footer />
  </div>
);

EventDetailsConvocatorias.propTypes = {
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default EventDetailsConvocatorias;
