import React from "react";
import PropTypes from "prop-types";

class Evento extends React.Component {
  static propTypes = {
    eventDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <div>
        <p>{this.props.eventDetails.name}</p>
        <img src="" alt="" />
        <p>{this.props.eventDetails.date}</p>
        <p>{this.props.eventDetails.desc}</p>
      </div>
    );
  }
}
export default Evento;
