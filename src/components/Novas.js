/**
 * Compenente conectado directamente a App en el que se conectan todos los
 * componentes relacionados con el botón Axenda.
 */
import React from "react";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ButtonsNovas from "./ButtonsNovas";
import SectionEventsNovas from "./SectionEventsNovas";

class Novas extends React.Component {
  //Aquí se utiliza "resetVisibility", la cual llamamos desde App, para poder mostrar nuevamente los eventos de Novas una vez han sido filtrados
  componentWillUnmount() {
    this.props.resetVisibility(this.props.eventsKey);
  }

  /*Renderiza, igual que en todos los componentes, el Header, así como los componentes SectionTitle y SectionEventsNovas, que muestran el título y la página de Novas al completo. En SectionTitle se pasa "title" para poder mostrar el título y en SectionEventsNovas se pasa "events", que coge toda la información de las Novas (nombre, descripción, imagen, etc.) 
  
  Además, le pasa al componente ButtonsNovas las funciones handleFiltering, que se encargan de filtrar los eventos por mes (una para el primero, otra para el segundo y otra para el tercero). También le pasa eventsKey, que es la información de todos los eventos en conjuto, y resetVisibility, para que vuelvan a aparecer todos una vez filtrados
  */
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="title-event-buttons">
          <SectionTitle title={this.props.novasEvents.title} />
          <ButtonsNovas
            handleFilteringActualMonthEventsNovas={
              this.props.handleFilteringActualMonthEventsNovas
            }
            handleFilteringNextMonthEventsNovas={
              this.props.handleFilteringNextMonthEventsNovas
            }
            handleFilteringThirdMonthEventsNovas={
              this.props.handleFilteringThirdMonthEventsNovas
            }
            eventsKey={this.props.eventsKey}
            resetVisibility={this.props.resetVisibility}
          />
        </div>
        <div>
          <SectionEventsNovas events={this.props.novasEvents.events} />
        </div>
      </div>
    );
  }
}

export default Novas;
