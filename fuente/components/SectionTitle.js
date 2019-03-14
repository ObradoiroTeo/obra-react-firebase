import React from "react";

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

export default SectionTitle;
