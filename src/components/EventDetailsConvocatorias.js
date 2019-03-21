/**
 * Describe los detalles de cada evento,su información está en Firebase y posteriormente en una Url.Conectado con App en donde están los JSON para cargar los datos.
 */
import React from "react";
import Header from "./Header";
import ManejoPdf from "./ManejoPdf";

class EventDetailsConvocatorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfs: this.props.eventDetails.pdfs
    };
  }

  // Aqui usamos (substring) para que la fecha se nos muestre como Dia-Mes-Año y no nos muestre la hora.
  // Tambien usamos (__html) para que interprete ese contenido como HTML y no como caracteres de control.
  // Ademas usamos (pdfs.map) para que se nos apliquen las mismas funciones en todos los pdfs que mostramos.

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
                <div className="enlace">
                  <ManejoPdf item={item} />
                </div>
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
      </div>
    );
  }
}

export default EventDetailsConvocatorias;
