/**
 * Cada evento  va junto una información ,link y fecha final(para saber hasta cuando está vigente).
 * Están conectados a Convocatorias y por ahí se conectan los datos los cuales están definidos en SectionEventsConvocatorias.
 * De EventoConvocatorias sale EventDetailsConvocatorias.
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
      <ul>
        <button className="event-reduced" onClick={this.goToEventDetails}>
          <img
            className="event-image"
            src={this.props.eventDetails.image}
            alt="imagen"
          />
          <p className="event-date">
            {this.props.eventDetails.date_fin_convocatoria.substring(0, 10)}
          </p>
          <p className="event-name">{this.props.eventDetails.name}</p>
        </button>
      </ul>
    );
  }
}

export default EventoConvocatorias;
