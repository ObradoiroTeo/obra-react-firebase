import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import Buttons from "./Buttons";
import SectionEvents from "./SectionEvents";
import Footer from "./Footer";

class Cultura extends React.Component {
  static propTypes = {
    cultureEvents: PropTypes.shape({
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
        <SectionTitle title={this.props.cultureEvents.title} />
        <Buttons
          handleFilteringActualMonthEvents={
            this.props.handleFilteringActualMonthEvents
          }
          handleFilteringNextMonthEvents={
            this.props.handleFilteringNextMonthEvents
          }
          handleFilteringThirdMonthEvents={
            this.props.handleFilteringThirdMonthEvents
          }
          eventsKey={this.props.eventsKey}
        />
        <SectionEvents
          eventsKey={this.props.eventsKey}
          events={this.props.cultureEvents.events}
        />
        <Footer />
      </div>
    );
  }
}

export default Cultura;
