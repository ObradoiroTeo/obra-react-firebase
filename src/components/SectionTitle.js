/**
 * Componente común a Axenda, Novas y Convocatorias en el que según el
 * botón mostrará el título correspondiente.
 */
import React from "react";

//SectionTitle permite mostrar el título de cada sección (Axenda, Novas y Convocatorias), así como la imagen correspondiente.
const SectionTitle = props => (
  <section>
    <div>
      <h1 className="title">{props.title}</h1>
    </div>
  </section>
);

export default SectionTitle;
