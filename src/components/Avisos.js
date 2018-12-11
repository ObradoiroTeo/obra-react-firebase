import React from "react";

import SectionTitle from "./SectionTitle";
import PropTypes from "prop-types";
import SectionEvents from "./SectionEvents";

class Avisos extends React.Component {
  static propTypes = {
    notifications: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  };
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
