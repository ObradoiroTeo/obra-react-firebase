import React from "react";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ButtonsAxenda from "./ButtonsAxenda";
import SectionEventsAxenda from "./SectionEventsAxenda";
import Footer from "./Footer";

class Axenda extends React.Component {
  componentWillUnmount() {
    this.props.resetVisibility(this.props.eventsKey);
  }

  render() {
    return (
      <div>
        <Header />
        <SectionTitle title={this.props.axendaEvents.title} />
        <ButtonsAxenda
          handleFilteringActualMonthEventsAxenda={
            this.props.handleFilteringActualMonthEventsAxenda
          }
          handleFilteringNextMonthEventsAxenda={
            this.props.handleFilteringNextMonthEventsAxenda
          }
          handleFilteringThirdMonthEventsAxenda={
            this.props.handleFilteringThirdMonthEventsAxenda
          }
          eventsKey={this.props.eventsKey}
          resetVisibility={this.props.resetVisibility}
        />
        <SectionEventsAxenda events={this.props.axendaEvents.events} />
        <Footer />
      </div>
    );
  }
}

export default Axenda;
