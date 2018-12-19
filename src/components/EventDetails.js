import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

const EventDetails = props => (
  <div>
    <Header />
    <p>{props.eventDetails.name}</p>
    <img src="" alt="" />
    <p>{props.eventDetails.date}</p>
    <p>{props.eventDetails.desc}</p>
  </div>
);

EventDetails.propTypes = {
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default EventDetails;
