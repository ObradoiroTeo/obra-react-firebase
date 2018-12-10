import React from "react";
import PropTypes from "prop-types";

class SectionTitle extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return <h1>{""}</h1>;
  }
}

export default SectionTitle;
