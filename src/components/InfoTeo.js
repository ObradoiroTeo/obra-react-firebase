/**
 * Componente que se carga al pulsar el botón de "infoteo" y en el que se renderizan los pdfs que se le pasan.
 * Es un componente "final", en él está toda la información necesaria para su funcionamiento.
 */

import React from "react";
import PDF from "react-pdf-js";
import Header from "./Header";
import Footer from "./Footer";

//Dento de esta ventana lo que vemos es el documento de InfoTeo en pdf. 👇
// Para la paginacion usamos (handlePrevious y handleNext) -> (previousButton y nextButton)
class InfoTeo extends React.Component {
  state = {};
  onDocumentComplete = pages => {
    this.setState({ page: 1, pages });
  };

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  };

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  };

  renderPagination = (page, pages) => {
    let previousButton = (
      <li className="pager-button" onClick={this.handlePrevious}>
        <i className="fa fa-arrow-left" /> Anterior
      </li>
    );
    if (page === 1) {
      previousButton = (
        <li className="pager-button">
          <a href="#pdf" className="no-underline">
            <i className="fa fa-arrow-left" /> Anterior
          </a>
        </li>
      );
    }
    let nextButton = (
      <li className="pager-button" onClick={this.handleNext}>
        <a href="#pdf" className="no-underline">
          Siguiente <i className="fa fa-arrow-right" />
        </a>
      </li>
    );
    if (page === pages) {
      nextButton = (
        <li className="pager-button">
          <a href="#pdf" className="no-underline">
            Siguiente <i className="fa fa-arrow-right" />
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  };
  //En el render se muestra el propio archivo pdf y la paginacion (botones de anterior y siguiente)
  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="pdf-container">
          <PDF
            file="InformaTeo_Novembro_2018.pdf"
            onDocumentComplete={this.onDocumentComplete}
            page={this.state.page}
          />
        </div>
        {pagination}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default InfoTeo;
