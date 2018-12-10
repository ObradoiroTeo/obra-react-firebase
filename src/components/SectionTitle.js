import React from "react";

import PropTypes from "prop-types";

class SectionTitle extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default SectionTitle;
