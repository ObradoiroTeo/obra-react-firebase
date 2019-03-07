import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ButtonsNovas from "./ButtonsNovas";
import SectionEventsNovas from "./SectionEventsNovas";
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
        <div>
          <Header />
        </div>
        <div className="title-event-buttons">
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
        </div>
        <div>
          <SectionEventsNovas events={this.props.novasEvents.events} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Novas;
