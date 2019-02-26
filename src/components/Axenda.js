import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";
import SectionEventsAxenda from "./SectionEventsAxenda";
import Footer from "./Footer";

class Axenda extends React.Component {
  static propTypes = {
    axendaEvents: PropTypes.shape({
      title: PropTypes.string.isRequired,
      events: PropTypes.object.isRequired
    }).isRequired,
    handleFilteringNextMonthEvents: PropTypes.func.isRequired,
    eventsKey: PropTypes.string.isRequired,
    resetVisibility: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    this.props.resetVisibility(this.props.eventsKey);
  }

  render() {
    return (
      <div>
        <Header />
        <SectionTitle title={this.props.axendaEvents.title} />
        <Buttons
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
