/**
 * Componente último que muestra detalladamente y de forma descriptiva cada uno de los eventos.
 *  Al pinchar en el evento cambia la sección eventos por la descripción del evento en sí.
 */
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

/* Este componente muestra el nombre (name), la fecha (date_event), la imagen (image) y la descripción (desc) de cada uno de los eventos*/
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
    <div>
      <Footer />
    </div>
  </div>
);

EventDetailsAxenda.propTypes = {
  eventDetailsAxenda: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date_event: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default EventDetailsAxenda;
