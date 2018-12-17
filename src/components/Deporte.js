import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";
import SectionEvents from "./SectionEvents";

class Deporte extends React.Component {
  static propTypes = {
    sportEvents: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <SectionTitle title={this.props.sportEvents.title} />
        <Buttons />
        <SectionEvents events={this.props.sportEvents.events} />
      </div>
    );
  }
}

export default Deporte;
