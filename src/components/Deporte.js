import React from "react";
import PropTypes from "prop-types";

import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";
import SectionEvents from "./SectionEvents";

class Deporte extends React.Component {
  static propTypes = {
    sportEvents: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
    meses: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <SectionTitle title={this.props.sportEvents.title} />
        <Buttons months={this.props.months} />
        <SectionEvents events={this.props.sportEvents.events} />
      </div>
    );
  }
}

export default Deporte;
