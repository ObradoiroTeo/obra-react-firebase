import React from "react";
import PropTypes from "prop-types";
import petroglifo from "../images/petroglifo.png";

const SectionTitle = props => (
  <section>
    <img src={petroglifo} className="background-title" alt="background-petr" />

    <div>
      <h1 className="title">{props.title}</h1>
    </div>
  </section>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
