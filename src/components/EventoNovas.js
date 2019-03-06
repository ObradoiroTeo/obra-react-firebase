import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

/* La función goToEventDetails permite acceder al detalle de cada evento al clicar sobre él. La dirección está compuesta por /novas/el nombre de cada evento. A través del state se cargan los datos relativos a cada evento */
class EventoNovas extends React.Component {
  static propTypes = {
    eventDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    }).isRequired
  };
  goToEventDetails = eventKey => {
    navigate(`/novas/${this.props.eventDetails.name}`, {
      state: { clave: this.props.indice }
    });
  };

  /* En el render hay una imagen, una fecha y un nombre para cada evento. Por último, la función goToEventDetails se pasa a través de un onClick en el botón correspondiente a cada evento, para que al clicar se entre en el detalle */
  render() {
    return (
      <button className="event-reduced" onClick={this.goToEventDetails}>
        <img
          className="event-image"
          src={this.props.eventDetails.image}
          alt="imagen"
        />
        <p className="event-date">{this.props.eventDetails.date}</p>

        <p className="event-name">{this.props.eventDetails.name}</p>
      </button>
    );
  }
}

export default EventoNovas;
