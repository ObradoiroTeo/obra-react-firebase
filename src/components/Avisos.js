import React from "react";

import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";

class Avisos extends React.Component {
  render() {
    return (
      <div>
        <SectionTitle title={this.props.notifications.title} />
        <Buttons months={this.state.meses} />
      </div>
    );
  }
}

export default Avisos;
