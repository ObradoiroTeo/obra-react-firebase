/**
 * Informa de citaciones,emplazamientos,avisos,edictos,requerimientos que salen de una base de datos como es Firebase posteriormente la información saldrá directamente desde una URL , teniendo además a Firebase como soporte.
 * Está conectada  a la App donde está el JSON con toda la información.
 * De Convocatorias salen SectionTitleConvocatorias y SectionEventsConvocatorias.
 */
import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import SectionEventsConvocatorias from "./SectionEventsConvocatorias";
import Footer from "./Footer";

class Convocatorias extends React.Component {
  static propTypes = {
    convocatorias: PropTypes.shape({
      title: PropTypes.string.isRequired,
      events: PropTypes.object.isRequired
    }).isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <SectionTitle title={this.props.convocatorias.title} />
        <SectionEventsConvocatorias events={this.props.convocatorias.events} />
        <Footer />
      </div>
    );
  }
}

export default Convocatorias;
