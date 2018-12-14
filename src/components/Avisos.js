import React from "react";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import SectionEvents from "./SectionEvents";

class Avisos extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionTitle title={this.props.notifications.title} />
        <SectionEvents events={this.props.notifications.events} />
      </div>
    );
  }
}

export default Avisos;
