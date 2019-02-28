import React from "react";
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
          +
          <img
            className="event-image"
            src={this.props.eventDetails.image}
            alt="imagen"
          />
          <p className="event-date">
            {this.props.eventDetails.date_fin_convocatoria.substring(0, 10)}
          </p>
          <p className="event-name">{this.props.eventDetails.name}</p>
          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: this.props.eventDetails.desc }}
          />
        </button>
        {this.state.pdfs.map(item => (
          <Item item={item} />
        ))}
      </ul>
    );
  }
}

export default EventoConvocatorias;
