import React from "react";
import PropTypes from "prop-types";

const SectionTitle = props => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
