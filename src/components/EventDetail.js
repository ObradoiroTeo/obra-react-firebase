import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

const EventDetail = props => (
  <div>
    <Header />
    <p>{props.eventDetail.name}</p>
    <img src="" alt="" />
    <p>{props.eventDetail.date}</p>
    <p>{props.eventDetail.desc}</p>
  </div>
);

EventDetail.PropTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default EventDetail;
