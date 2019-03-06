import React from "react";
import PropTypes from "prop-types";

//SectionTitle permite mostrar el título de cada sección (Axenda, Novas y Convocatorias)
const SectionTitle = props => (
  <section>
    <img
      src={"/images/petroglifo.png"}
      className="background-title"
      alt="background-petr"
    />

    <div>
      <h1 className="title">{props.title}</h1>
    </div>
  </section>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
