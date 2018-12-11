import React from "react";

import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";
import PropTypes from "prop-types";
import SectionEvents from "./SectionEvents";

class Cultura extends React.Component {
  static propTypes = {
    cultureEvents: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  };
  render() {
    return (
      <div>
        <SectionTitle title={this.props.cultureEvents.title} />
        <Buttons />
        <SectionEvents events={this.props.cultureEvents.events} />
      </div>
    );
  }
}

export default Cultura;
