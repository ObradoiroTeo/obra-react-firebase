import React from "react";
import PropTypes from "prop-types";

class ButtonsNovas extends React.Component {
  static propTypes = {
    handleFilteringNextMonthEvents: PropTypes.func.isRequired,
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

  getNextMonth = actualMonth => {
    let nextMonth = actualMonth + 1;
    if (nextMonth > 11) {
      nextMonth = nextMonth - 12;
    }
    return nextMonth;
  };

  handleActualMonthClick = event => {
    this.props.handleFilteringActualMonthEventsNovas(this.props.eventsKey);
  };

  handleNextMonthClick = event => {
    this.props.handleFilteringNextMonthEventsNovas(this.props.eventsKey);
  };

  handleThirdMonthClick = event => {
    this.props.handleFilteringThirdMonthEventsNovas(this.props.eventsKey);
  };

  resetAllItems = event => {
    this.props.resetVisibility(this.props.eventsKey);
  };

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

export default ButtonsNovas;
