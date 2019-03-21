/**
 * Cada evento va junto:información,link y fecha final(hasta estar vigente).Conectados a Convocatorias por donde se adquieren los datos que están definidos en SectionEventsConvocatorias.De EventoConvocatorias sale EventDetailsConvocatorias.
 */
import React from "react";
import { navigate } from "@reach/router";

/* La función goToEventDetails permite acceder al detalle de cada evento al clicar sobre él. La dirección está compuesta por /convocatorias/el nombre de cada evento. A través del state se cargan los datos relativos a cada evento */
class EventoConvocatorias extends React.Component {
  goToEventDetails = eventKey => {
    navigate(`/convocatorias/${this.props.eventDetails.name}`, {
      state: { clave: this.props.indice }
    });
  };

  /* En el render hay una imagen, una fecha y un nombre para cada evento. Por último, la función goToEventDetails se pasa a través de un onClick en el botón correspondiente a cada evento, para que al clicar se entre en el detalle */
  render() {
    return (
      <button className="convocatoria-reduced" onClick={this.goToEventDetails}>
        <p className="convocatoria-date">
          {this.props.eventDetails.date_fin_convocatoria.substring(0, 10)}
        </p>
        <p className="convocatoria-name">{this.props.eventDetails.name}</p>
      </button>
    );
  }
}

export default EventoConvocatorias;
