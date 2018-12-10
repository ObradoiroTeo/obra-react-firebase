import React from "react";

import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";
import PropTypes from "prop-types";

class Avisos extends React.Component {
  static propTypes = {
    notifications: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
    months: PropTypes.object.isRequired
  };
  render() {
    return (
      <div>
        <SectionTitle title={this.props.notifications.title} />
        <Buttons months={this.state.months} />
      </div>
    );
  }
}

export default Avisos;
