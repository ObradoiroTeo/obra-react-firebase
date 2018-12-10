import React from "react";
import Proptypes from "prop-types";

class Buttons extends React.Component {
  static proptypes = {
    mes: Proptypes.string.isRequired
  };

  render() {
    return (
      <div>
        <button>{this.props.months.mes1}</button>
        <button>{this.props.months.mes2}</button>
        <button>{this.props.months.mes3}</button>
      </div>
    );
  }
}

export default Buttons;
