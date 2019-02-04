import React from "react";
import PDF from "react-pdf-js";
import Header from "./Header";
import Footer from "./Footer";

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
      <li className="month-button" onClick={this.handlePrevious}>
        <i className="fa fa-arrow-left" /> Anterior
      </li>
    );
    if (page === 1) {
      previousButton = (
        <li className="month-button">
          <a href="#pdf">
            <i className="fa fa-arrow-left" /> Anterior
          </a>
        </li>
      );
    }
    let nextButton = (
      <li className="month-button" onClick={this.handleNext}>
        <a href="#pdf">
          Siguiente <i className="fa fa-arrow-right" />
        </a>
      </li>
    );
    if (page === pages) {
      nextButton = (
        <li className="month-button">
          <a href="#pdf">
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
  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <Header />
        <h1>Informa Teo</h1>
        <PDF
          file="InformaTeo_Novembro_2018.pdf"
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
        />
        {pagination}
        <Footer />
      </div>
    );
  }
}

export default InfoTeo;
