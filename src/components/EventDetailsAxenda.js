import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const EventDetailsAxenda = props => (
  <div>
    <Header />
    <div className="event-container">
      <p className="details-name">
        {props.eventDetails.events[props.location.state.clave].name}
      </p>
      <p className="details-date">
        {props.eventDetails.events[props.location.state.clave].date_event}
      </p>

      <div className="details-container">
        <img
          src={props.eventDetails.events[props.location.state.clave].image}
          alt="img"
          className="details-img"
        />
        <p className="details-desc">
          {props.eventDetails.events[props.location.state.clave].desc}
        </p>
      </div>
    </div>
    <div className="empty-hack" />

    <Footer />
  </div>
);

EventDetailsAxenda.propTypes = {
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date_event: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default EventDetailsAxenda;
