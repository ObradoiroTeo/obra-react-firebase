import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

class EventoConvocatorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfs: this.props.eventDetails.pdfs
    };
  }
  render() {
    return (
      <ul>
        <button className="event-reduced">
          <img
            className="event-image"
            src={this.props.eventDetails.image}
            alt="imagen"
          />
          <p className="event-date">
            {this.props.eventDetails.date_fin_convocatoria.substring(0, 10)}
          </p>
          <p className="event-name">{this.props.eventDetails.name}</p>
          <br />
          <br />
          <br />
          <br />
          {this.state.pdfs.map(item => (
            <Item item={item} />
          ))}
        </button>
      </ul>
    );
  }
}

export default EventoConvocatorias;
