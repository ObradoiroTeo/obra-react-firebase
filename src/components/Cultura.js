import React from "react";

import SectionTitle from "./SectionTitle";

class Cultura extends React.Component {
  render() {
    return (
      <div>
        <SectionTitle title={this.props.cultureEvents.title} />
      </div>
    );
  }
}

export default Cultura;
