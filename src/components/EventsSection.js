import React from "react";

import Evento from "./Evento";

class EventsSection extends React.Component {
  render() {
    return (
      <ul className="eventos">
        {Object.keys(this.props.events).map(eventKey => (
          <Evento key={eventKey} events={this.props.events} />
        ))}
      </ul>
    );
  }
}

export default EventsSection;
