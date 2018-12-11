import React from "react";
import PropTypes from "prop-types";

import Evento from "./Evento";

class EventsSection extends React.Component {
  static propTypes = {
    eventosDetails: PropTypes.string.isRequired
  };

  render() {
    return (
      <ul className="eventos">
        {Object.keys(this.props.events).map(eventKey => (
          <Evento key={eventKey} eventDetails={this.props.events[eventKey]} />
        ))}
      </ul>
    );
  }
}

export default EventsSection;
