import React from "react";
import Header from "./Header";

import PropTypes from "prop-types";

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
        <h2>{this.props.sportEvents.title}</h2>
      </div>
    );
  }
}

export default Deporte;
