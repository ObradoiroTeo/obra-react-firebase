import React from "react";

import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";
import PropTypes from "prop-types";

class Cultura extends React.Component {
  static propTypes = {
    cultureEvents: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
    months: PropTypes.object.isRequired
  };
  render() {
    return (
      <div>
        <SectionTitle title={this.props.cultureEvents.title} />
        <Buttons months={this.props.months} />
      </div>
    );
  }
}

export default Cultura;
