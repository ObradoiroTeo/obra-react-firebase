import React from "react";
import Proptypes from "prop-types";

class Buttons extends React.Component {
  static proptypes = {
    mes: Proptypes.string.isRequired
  };

  render() {
    return (
      <div>
        <button>{this.props.months.month1}</button>
        <button>{this.props.months.month2}</button>
        <button>{this.props.months.month3}</button>
      </div>
    );
  }
}

export default Buttons;
