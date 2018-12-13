import React from "react";
import Evento from "./Evento";
import PropTypes from "prop-types";
class SectionEvents extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    events: PropTypes.object.isRequired
  };

  render() {
    return (
      <ul className="events">
        {Object.keys(this.props.events).map(eventKey => (
          <Evento key={eventKey} eventDetails={this.props.events[eventKey]} />
        ))}
      </ul>
    );
  }
}
export default SectionEvents;
