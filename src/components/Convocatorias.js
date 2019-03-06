/**
 * Informa de citaciones,emplazamientos,avisos,edictos,requerimientos que salen de una base de datos como es Firebase.
 * Está conectada  a la App donde está el JSON con toda la información.
 * A su vez Convocatorias se divide en:
 * -SectionTitleConvocatorias con el título al que se refiera.
 * - SectionEventsConvocatorias  en el cual viene explicado el evento (EventoConvocatorias) junto a links donde se puede encontrar más información(EventDetailsConvocatorias) o escritos para imprimir.
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
