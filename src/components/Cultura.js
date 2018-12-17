import React from "react";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";
import SectionEvents from "./SectionEvents";

class Cultura extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionTitle title={this.props.cultureEvents.title} />
        <Buttons
          handleFilteringNextMonthEvents={
            this.props.handleFilteringNextMonthEvents
          }
          eventsKey={this.props.eventsKey}
        />
        <SectionEvents events={this.props.cultureEvents.events} />
      </div>
    );
  }
}

export default Cultura;
