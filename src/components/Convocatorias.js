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

  /*Renderiza, igual que en todos los componentes, el Header y el Footer, así como los componentes SectionTitle y SectionEventsConvocatorias, que muestran el título y la página de Convocatorias al completo. En SectionTitle se pasa "title" para poder mostrar el título y en SectionEventsConvocatorias se pasa "events", que coge toda la información de las Convocatorias (nombre, descripción, imagen, etc.) */
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
