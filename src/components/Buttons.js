import React from "react";
import PropTypes from "prop-types";

class Buttons extends React.Component {
  static propTypes = {
    handleFilteringNextMonthEvents: PropTypes.func.isRequired,
    eventsKey: PropTypes.string.isRequired
  };

  myInput = React.createRef();

  months = [
    "Xaneiro",
    "Febreiro",
    "Marzo",
    "Abril",
    "Maio",
    "Xuño",
    "Xullo",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Decembro"
  ];

  getNextMonth = actualMonth => {
    let nextMonth = actualMonth + 1;
    if (nextMonth > 11) {
      nextMonth = nextMonth - 12;
    }
    return nextMonth;
  };

  handleActualMonthClick = event => {
    this.props.handleFilteringActualMonthEvents(this.props.eventsKey);
  };

  handleNextMonthClick = event => {
    this.props.handleFilteringNextMonthEvents(this.props.eventsKey);
  };

  handleThirdMonthClick = event => {
    this.props.handleFilteringThirdMonthEvents(this.props.eventsKey);
  };

  resetAllItems = event => {
    this.props.resetVisibility(this.props.eventsKey);
  };

  handleBotoncitosDelDemonioClick = event => {
    this.props.handleBotoncitosDelDemonio(this.props.eventsKey);
  };
  // ---------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    console.log(storeName);
    // 3. Change the page to /store/whatever-they-entered
  };
  //-------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------
  render() {
    const date = new Date();

    const month1 = date.getMonth();
    const month2 = this.getNextMonth(month1);
    const month3 = this.getNextMonth(month2);

    return (
      <div className="month-buttons-container">
        <button className="month-button" onClick={this.handleActualMonthClick}>
          {this.months[month1]}
        </button>
        <button className="month-button" onClick={this.handleNextMonthClick}>
          {this.months[month2]}
        </button>
        <button className="month-button" onClick={this.handleThirdMonthClick}>
          {this.months[month3]}
        </button>
        <button className="month-button" onClick={this.resetAllItems}>
          Mostrar todos
        </button>

        <div
          className="month-button"
          id="categoria"
          onClick={this.handleBotoncitosDelDemonioClick}
        >
          <label for="Categoria" onSubmit={this.handleMark2}>
            Categoría
          </label>

          <select name="solo1" ref={this.myInput}>
            <option value="Axuda e Subvencións">Axuda e Subvencións</option>
            <option value="Cementerio">Cementerio</option>
            <option value="Concursos e Licitacións">
              Concursos e Licitacións
            </option>
            <option value="Ofertas de Emprego Público">
              Ofertas de Emprego Público
            </option>
            <option value="Outras">Outras</option>
            <option value="Calquera">Calquera</option>
          </select>
        </div>
        <form className="store-selector" onSubmit={this.goToStore}>
          <button type="submit">Visit Store →</button>
        </form>
      </div>
    );
  }
}

export default Buttons;
