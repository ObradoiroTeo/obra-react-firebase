import React from "react";

class EventsSection extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.events.eventoUno.name}</p>
        <img src="" alt="" />
        <p>{this.props.events.eventoUno.fecha}</p>
        <p>{this.props.events.eventoUno.desc}</p>
      </div>
    );
  }
}

export default EventsSection;
