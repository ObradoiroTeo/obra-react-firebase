/**
 * Compenente conectado directamente a App en el que se conectan todos los
 * componentes relacionados con el botón Axenda.
 */
import React from "react";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ButtonsAxenda from "./ButtonsAxenda";
import SectionEventsAxenda from "./SectionEventsAxenda";
import Footer from "./Footer";

class Axenda extends React.Component {
  //Aquí se utiliza "resetVisibility", la cual llamamos desde App, para poder mostrar nuevamente los eventos de Axenda una vez han sido filtrados
  componentWillUnmount() {
    this.props.resetVisibility(this.props.eventsKey);
  }
  /*Renderiza, igual que en todos los componentes, el Header y el Footer, así como los componentes SectionTitle y SectionEventsAxenda, que muestran el título y la página de Axenda al completo. En SectionTitle se pasa "title" para poder mostrar el título y en SectionEventsAxenda se pasa "events", que coge toda la información de las Axenda (nombre, descripción, imagen, etc.) 
  
  Además, le pasa al componente ButtonsAxenda las funciones handleFiltering, que se encargan de filtrar los eventos por mes (una para el primero, otra para el segundo y otra para el tercero). También le pasa eventsKey, que es la información de todos los eventos en conjuto, y resetVisibility, para que vuelvan a aparecer todos una vez filtrados
  */

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="title-event-buttons">
          <SectionTitle title={this.props.axendaEvents.title} />
          <ButtonsAxenda
            handleFilteringActualMonthEventsAxenda={
              this.props.handleFilteringActualMonthEventsAxenda
            }
            handleFilteringNextMonthEventsAxenda={
              this.props.handleFilteringNextMonthEventsAxenda
            }
            handleFilteringThirdMonthEventsAxenda={
              this.props.handleFilteringThirdMonthEventsAxenda
            }
            eventsKey={this.props.eventsKey}
            resetVisibility={this.props.resetVisibility}
          />
        </div>
        <div>
          <SectionEventsAxenda events={this.props.axendaEvents.events} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Axenda;
