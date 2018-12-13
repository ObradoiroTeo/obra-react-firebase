import React from "react";
import SectionTitle from "./SectionTitle";
import SectionEvents from "./SectionEvents";

class Avisos extends React.Component {
  render() {
    return (
      <div>
        <SectionTitle title={this.props.notifications.title} />
        <SectionEvents events={this.props.notifications.events} />
      </div>
    );
  }
}

export default Avisos;
