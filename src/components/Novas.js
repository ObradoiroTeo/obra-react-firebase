import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ButtonsNovas from "./ButtonsNovas";
import SectionEvents from "./SectionEvents";
import Footer from "./Footer";

class Novas extends React.Component {
  static propTypes = {
    novasEvents: PropTypes.shape({
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
        <SectionEvents events={this.props.novasEvents.events} />
        <Footer />
      </div>
    );
  }
}

export default Novas;
