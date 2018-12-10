import React from "react";

import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";

class Cultura extends React.Component {
  render() {
    return (
      <div>
        <SectionTitle title={this.props.cultureEvents.title} />
        <Buttons months={this.state.meses} />
      </div>
    );
  }
}

export default Cultura;
