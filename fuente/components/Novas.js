import React from "react";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ButtonsNovas from "./ButtonsNovas";
import SectionEventsNovas from "./SectionEventsNovas";
import Footer from "./Footer";

class Novas extends React.Component {
  componentWillUnmount() {
    this.props.resetVisibility(this.props.eventsKey);
  }

  render() {
    return (
      <div>
        <Header />
        <SectionTitle title={this.props.novasEvents.title} />
        <ButtonsNovas
          handleFilteringActualMonthEventsNovas={
            this.props.handleFilteringActualMonthEventsNovas
          }
          handleFilteringNextMonthEventsNovas={
            this.props.handleFilteringNextMonthEventsNovas
          }
          handleFilteringThirdMonthEventsNovas={
            this.props.handleFilteringThirdMonthEventsNovas
          }
          eventsKey={this.props.eventsKey}
          resetVisibility={this.props.resetVisibility}
        />
        <SectionEventsNovas events={this.props.novasEvents.events} />
        <Footer />
      </div>
    );
  }
}

export default Novas;
