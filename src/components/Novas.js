import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ButtonsNovas from "./ButtonsNovas";
import SectionEventsNovas from "./SectionEventsNovas";
import Footer from "./Footer";

class Novas extends React.Component {
  static propTypes = {
    novasEvents: PropTypes.shape({
      title: PropTypes.string.isRequired,
      events: PropTypes.object.isRequired
    }).isRequired,
    handleFilteringNextMonthEventsNovas: PropTypes.func.isRequired,
    eventsKey: PropTypes.string.isRequired,
    resetVisibility: PropTypes.func.isRequired
  };

  //Aquí se utiliza "resetVisibility", la cual llamamos desde App, para poder mostrar nuevamente los eventos de Novas una vez han sido filtrados
  componentWillUnmount() {
    this.props.resetVisibility(this.props.eventsKey);
  }

  /*Renderiza, igual que en todos los componentes, el Header y el Footer, así como los componentes SectionTitle y SectionEventsNovas, que muestran el título y la página de Novas al completo. En SectionTitle se pasa "title" para poder mostrar el título y en SectionEventsNovas se pasa "events", que coge toda la información de las Novas (nombre, descripción, imagen, etc.) 
  
  Además, le pasa al componente ButtonsNovas las funciones handleFiltering, que se encargan de filtrar los eventos por mes (una para el primero, otra para el segundo y otra para el tercero). También le pasa eventsKey, que es la información de todos los eventos en conjuto, y resetVisibility, para que vuelvan a aparecer todos una vez filtrados
  */
  render() {
    return (
      <div>
        <Header />
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
        <SectionEventsNovas events={this.props.novasEvents.events} />
        <Footer />
      </div>
    );
  }
}

export default Novas;
