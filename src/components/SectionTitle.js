/**
 * Componente común a Axenda, Novas y Convocatorias en el que según el
 * botón mostrará el título correspondiente.
 */
import React from "react";
import PropTypes from "prop-types";

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
