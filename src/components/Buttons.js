import React from "react";
import PropTypes from "prop-types";

class Buttons extends React.Component {
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
    this.props.handleFilteringActualMonthEvents(this.props.eventsKey);
  };

  handleNextMonthClick = event => {
    this.props.handleFilteringNextMonthEvents(this.props.eventsKey);
  };

  render() {
    const date = new Date();

    const month1 = date.getMonth();
    const month2 = this.getNextMonth(month1);
    const month3 = this.getNextMonth(month2);

    return (
      <div>
        <button onClick={this.handleActualMonthClick}>
          {this.months[month1]}
        </button>
        <button onClick={this.handleNextMonthClick}>
          {this.months[month2]}
        </button>
        <button>{this.months[month3]}</button>
      </div>
    );
  }
}

export default Buttons;
