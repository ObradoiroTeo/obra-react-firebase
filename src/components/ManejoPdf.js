import React from "react";

// En este componente obtenemos los pdfs para despues mostrarlos en <EventDetailsConvocatorias> como una lista.
class ManejoPdf extends React.Component {
  render() {
    return (
      <div>
        <a className="convocatoria-enlace" href={this.props.item.file_uri}>
          {this.props.item.filename}{" "}
        </a>
      </div>
    );
  }
}

export default ManejoPdf;
