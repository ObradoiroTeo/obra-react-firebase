import React from "react";
import Evento from "./Evento";
class SectionEvents extends React.Component {
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
