import React from "react";
import PropTypes from "prop-types";
import magosto from "../images/magosto.jpg";
import { navigate } from "@reach/router";

class Evento extends React.Component {
  static propTypes = {
    eventDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    }).isRequired
  };
  goToEventDetails = event => {
    navigate(`/cultura/${this.props.eventDetails.name}`);
  };
  render() {
    return (
      <button className="event-reduced" onClick={this.goToEventDetails}>
        <img className="event-image" src={magosto} alt="imagen" />
        <p className="event-date">{this.props.eventDetails.date}</p>

        <p className="event-name">{this.props.eventDetails.name}</p>
      </button>
    );
  }
}

export default Evento;
