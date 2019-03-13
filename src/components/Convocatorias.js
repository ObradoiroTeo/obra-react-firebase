/*
Informa de citaciones,emplazamientos,avisos,edictos,requerimientos que salen de una base de datos como es Firebase posteriormente la información saldrá directamente desde una URL , teniendo además a Firebase como soporte.
Está conectada  a la App donde está el JSON con toda la información.
De Convocatorias salen SectionTitleConvocatorias y SectionEventsConvocatorias.
 
Componente en el que se definen los botones de navegación de la sección Convocatorias.
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

  /*Renderiza, igual que en todos los componentes, el Header y el Footer, así como los componentes SectionTitle y SectionEventsConvocatorias, que muestran el título y la página de Convocatorias al completo. En SectionTitle se pasa "title" para poder mostrar el título y en SectionEventsConvocatorias se pasa "events", que coge toda la información de las Convocatorias (nombre, descripción, imagen, etc.) */
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <SectionTitle title={this.props.convocatorias.title} />
        </div>
        <div>
          <SectionEventsConvocatorias
            events={this.props.convocatorias.events}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Convocatorias;
