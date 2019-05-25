/*Informa de avisos,citaciones que salen de Firebase y posteriormente de una URL,teniendo a Firebase como soporte.
Conectada a App donde está la información en los JSON.De Convocatorias salen SectionTitleConvocatorias y SectionEventsConvocatorias.
 
Componente en el que se definen los botones de navegación de la sección Convocatorias.
*/
import React from "react";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import SectionEventsConvocatorias from "./SectionEventsConvocatorias";

class Convocatorias extends React.Component {
  /*Renderiza, igual que en todos los componentes, el Header, así como los componentes SectionTitle y SectionEventsConvocatorias, que muestran el título y la página de Convocatorias al completo. En SectionTitle se pasa "title" para poder mostrar el título y en SectionEventsConvocatorias se pasa "events", que coge toda la información de las Convocatorias (nombre, descripción, imagen, etc.) */
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="convocatorias-title">
          <SectionTitle title={this.props.convocatorias.title} />
        </div>
        <div>
          <SectionEventsConvocatorias
            events={this.props.convocatorias.events}
          />
        </div>
      </div>
    );
  }
}

export default Convocatorias;
