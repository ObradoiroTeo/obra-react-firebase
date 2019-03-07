/**
 * Describe los detalles de cada uno de los eventos cuya información está guardada en Firebase y que posteriormente vendrá dada directamente desde una URL.
 * Está conectado  con App en donde se cargarían el JSON para poder obtener los datos.
 */

import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import ManejoPdf from "./ManejoPdf";

class EventDetailsConvocatorias extends React.Component {
  static propTypes = {
    eventDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    }).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      pdfs: this.props.eventDetails.pdfs
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="event-container">
          <p className="details-name">
            {
              this.props.eventDetails.events[this.props.location.state.clave]
                .name
            }
          </p>
          <p className="details-date">
            {this.props.eventDetails.events[
              this.props.location.state.clave
            ].date_fin_convocatoria.substring(0, 10)}
          </p>
          <div className="details-container">
            <p className="lista-pdf">
              {this.props.eventDetails.events[
                this.props.location.state.clave
              ].pdfs.map(item => (
                <ManejoPdf item={item} />
              ))}
            </p>
            <p
              className="details-desc"
              dangerouslySetInnerHTML={{
                __html: this.props.eventDetails.events[
                  this.props.location.state.clave
                ].desc
              }}
            />
          </div>
        </div>
        <div className="empty-hack" />
        <Footer />
      </div>
    );
  }
}

export default EventDetailsConvocatorias;
