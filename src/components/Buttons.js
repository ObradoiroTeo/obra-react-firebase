import React from "react";

class Buttons extends React.Component {
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

  render() {
    const date = new Date();

    const month1 = date.getMonth();
    const month2 = this.getNextMonth(month1);
    const month3 = this.getNextMonth(month2);

    return (
      <div>
        <button>{this.months[month1]}</button>
        <button>{this.months[month2]}</button>
        <button>{this.months[month3]}</button>
      </div>
    );
  }
}

export default Buttons;
