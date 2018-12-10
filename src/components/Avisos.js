import React from "react";

import SectionTitle from "./SectionTitle";

class Avisos extends React.Component {
  render() {
    return (
      <div>
        <SectionTitle title={this.props.notifications.title} />
      </div>
    );
  }
}

export default Avisos;
