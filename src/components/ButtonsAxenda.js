/**
 * Componente en el que se definen los botones de navegación de la sección Axenda.
 */
import React from "react";
import PropTypes from "prop-types";

class ButtonsAxenda extends React.Component {
  static propTypes = {
    handleFilteringNextMonthEventsAxenda: PropTypes.func.isRequired,
    eventsKey: PropTypes.string.isRequired
  };

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

  // Esta funcion es la que usamos para los botones de filtrado por meses. Se usa para que los botones de los meses se actualicen automaticamente 👇
  getNextMonth = actualMonth => {
    let nextMonth = actualMonth + 1;
    if (nextMonth > 11) {
      nextMonth = nextMonth - 12;
    }
    return nextMonth;
  };

  // Esta funcion es la que muestra el mes actual dentro de los botones de filtrado.
  // Para utilizarna necesitamos usar -> (handleFilteringActualMonthEventsAxenda) que esta definida y explicada en App.
  handleActualMonthClick = event => {
    this.props.handleFilteringActualMonthEventsAxenda(this.props.eventsKey);
  };

  // Esta funcion es la que muestra el mes siguiente dentro de los botones de filtrado.
  // Para utilizarna necesitamos usar -> (handleFilteringNextMonthEventsAxenda) que esta definida y explicada en App.
  handleNextMonthClick = event => {
    this.props.handleFilteringNextMonthEventsAxenda(this.props.eventsKey);
  };

  // Esta funcion es la que muestra el tercer mes dentro de los botones de filtrado.
  // Para utilizarna necesitamos usar -> (handleFilteringThirdMonthEventsAxenda) que esta definida y explicada en App.
  handleThirdMonthClick = event => {
    this.props.handleFilteringThirdMonthEventsAxenda(this.props.eventsKey);
  };

  // Esta funcion resetea el valor de visibilidad.
  // Para utilizarna necesitamos usar -> (resetVisibility) que esta definida y explicada en App.
  resetAllItems = event => {
    this.props.resetVisibility(this.props.eventsKey);
  };

  // Dentro del render vemos 4 botones: <Mes Actual> <Mes Siguiente> <Tercer Mes> y <Mostrar Todos>
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
        <div className="show-all-container">
          <button className="show-all-button" onClick={this.resetAllItems}>
            Mostrar todos
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonsAxenda;
