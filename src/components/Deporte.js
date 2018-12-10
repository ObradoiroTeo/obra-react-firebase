import React from "react";
import PropTypes from "prop-types";

import SectionTitle from "./SectionTitle";

class Deporte extends React.Component {
  static propTypes = {
    sportEvents: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <div>
        <SectionTitle title={this.props.sportEvents.title} />
      </div>
    );
  }
}

export default Deporte;
