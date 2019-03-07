import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ButtonsAxenda from "./ButtonsAxenda";
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
        <div>
          <Header />
        </div>
        <div className="title-event-buttons">
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
        </div>
        <div>
          <SectionEventsAxenda events={this.props.axendaEvents.events} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Axenda;
