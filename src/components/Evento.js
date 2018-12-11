import React from "react";

class Evento extends React.Component {
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
