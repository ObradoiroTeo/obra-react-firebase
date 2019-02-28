import React from "react";
import { Router } from "@reach/router";

import "../index.css";
import Home from "./Home";
import Axenda from "./Axenda";
import Novas from "./Novas";
import Convocatorias from "./Convocatorias";
import InfoTeo from "./InfoTeo";
import Admin from "./Admin";
import Salvapantallas from "./Salvapantallas";
import NotFound from "./NotFound";
import EventDetailsAxenda from "./EventDetailsAxenda";
import EventDetailsConvocatorias from "./EventDetailsConvocatorias";
import EventDetailsNovas from "./EventDetailsNovas";

import sampleConvocatorias from "../sample-Convocatorias.json";
import sampleNovas from "../sample-Novas.json";
import base from "../base";
import sampleAxenda from "../sample-Axenda.json";

class App extends React.Component {
  state = {
    novas: {},
    axenda: {},
    convocatorias: {}
  };

  loadSampleConvocatorias = () => {
    this.setState({ convocatorias: sampleConvocatorias });
  };

  loadSampleNovas = () => {
    this.setState({ novas: sampleNovas });
  };

  loadSampleAxenda = () => {
    this.setState({ axenda: sampleAxenda });
  };

  componentDidMount() {
    this.ref = base.syncState(`convocatorias`, {
      context: this,
      state: "convocatorias"
    });
    this.ref = base.syncState(`novas`, {
      context: this,
      state: "novas"
    });
    this.ref = base.syncState(`axenda`, {
      context: this,
      state: "axenda"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  getNextMonth = actualMonth => {
    let nextMonth = actualMonth + 1;
    if (nextMonth > 11) {
      nextMonth = nextMonth - 12;
    }
    return nextMonth;
  };

  handleFilteringActualMonthEventsAxenda = eventsKey => {
    const actualDate = new Date();
    const actualMonth = actualDate.getMonth();

    const eventsToFilter = { ...this.state[eventsKey].events };
    const filteredEvents = Object.keys(eventsToFilter).map(eventKey => {
      const actualEventDate = new Date(eventsToFilter[eventKey].date_event);
      const actualEventMonth = actualEventDate.getMonth();
      if (actualMonth === actualEventMonth) {
        eventsToFilter[eventKey].visible = true;
      } else {
        eventsToFilter[eventKey].visible = false;
      }
      return eventsToFilter[eventKey];
    });

    this.setState({ [`${eventsKey}.events`]: filteredEvents });
  };

  handleFilteringNextMonthEventsAxenda = eventsKey => {
    const actualDate = new Date();
    const actualMonth = actualDate.getMonth();
    const nextMonth = this.getNextMonth(actualMonth);

    const eventsToFilter = { ...this.state[eventsKey].events };
    const filteredEvents = Object.keys(eventsToFilter).map(eventKey => {
      const actualEventDate = new Date(eventsToFilter[eventKey].date_event);
      const actualEventMonth = actualEventDate.getMonth();
      if (nextMonth === actualEventMonth) {
        eventsToFilter[eventKey].visible = true;
      } else {
        eventsToFilter[eventKey].visible = false;
      }
      return eventsToFilter[eventKey];
    });

    this.setState({ [`${eventsKey}.events`]: filteredEvents });
  };

  handleFilteringThirdMonthEventsAxenda = eventsKey => {
    const actualDate = new Date();
    const actualMonth = actualDate.getMonth();
    const nextMonth = this.getNextMonth(actualMonth);
    const thirdMonth = this.getNextMonth(nextMonth);

    const eventsToFilter = { ...this.state[eventsKey].events };
    const filteredEvents = Object.keys(eventsToFilter).map(eventKey => {
      const actualEventDate = new Date(eventsToFilter[eventKey].date_event);
      const actualEventMonth = actualEventDate.getMonth();
      if (thirdMonth === actualEventMonth) {
        eventsToFilter[eventKey].visible = true;
      } else {
        eventsToFilter[eventKey].visible = false;
      }
      return eventsToFilter[eventKey];
    });

    this.setState({ [`${eventsKey}.events`]: filteredEvents });
  };

  handleFilteringActualMonthEventsNovas = eventsKey => {
    const actualDate = new Date();
    const actualMonth = actualDate.getMonth();

    const eventsToFilter = { ...this.state[eventsKey].events };
    const filteredEvents = Object.keys(eventsToFilter).map(eventKey => {
      const actualEventDate = new Date(eventsToFilter[eventKey].date);
      const actualEventMonth = actualEventDate.getMonth();
      if (actualMonth === actualEventMonth) {
        eventsToFilter[eventKey].visible = true;
      } else {
        eventsToFilter[eventKey].visible = false;
      }
      return eventsToFilter[eventKey];
    });

    this.setState({ [`${eventsKey}.events`]: filteredEvents });
  };

  handleFilteringNextMonthEventsNovas = eventsKey => {
    const actualDate = new Date();
    const actualMonth = actualDate.getMonth();
    const nextMonth = this.getNextMonth(actualMonth);

    const eventsToFilter = { ...this.state[eventsKey].events };
    const filteredEvents = Object.keys(eventsToFilter).map(eventKey => {
      const actualEventDate = new Date(eventsToFilter[eventKey].date);
      const actualEventMonth = actualEventDate.getMonth();
      if (nextMonth === actualEventMonth) {
        eventsToFilter[eventKey].visible = true;
      } else {
        eventsToFilter[eventKey].visible = false;
      }
      return eventsToFilter[eventKey];
    });

    this.setState({ [`${eventsKey}.events`]: filteredEvents });
  };

  handleFilteringThirdMonthEventsNovas = eventsKey => {
    const actualDate = new Date();
    const actualMonth = actualDate.getMonth();
    const nextMonth = this.getNextMonth(actualMonth);
    const thirdMonth = this.getNextMonth(nextMonth);

    const eventsToFilter = { ...this.state[eventsKey].events };
    const filteredEvents = Object.keys(eventsToFilter).map(eventKey => {
      const actualEventDate = new Date(eventsToFilter[eventKey].date);
      const actualEventMonth = actualEventDate.getMonth();
      if (thirdMonth === actualEventMonth) {
        eventsToFilter[eventKey].visible = true;
      } else {
        eventsToFilter[eventKey].visible = false;
      }
      return eventsToFilter[eventKey];
    });

    this.setState({ [`${eventsKey}.events`]: filteredEvents });
  };

  resetVisibility = eventsKey => {
    const eventsToReset = { ...this.state[eventsKey].events };
    const resetedEvents = Object.keys(eventsToReset).map(eventKey => {
      if (eventsToReset[eventKey].visible === false) {
        eventsToReset[eventKey].visible = true;
      }
      return eventsToReset[eventKey];
    });

    this.setState({ [`${eventsKey}.events`]: resetedEvents });
  };

  render() {
    return (
      <div className="body-background">
        <Router>
          <Home path="/" />
          <Axenda
            path="/axenda"
            axendaEvents={this.state.axenda}
            handleFilteringActualMonthEventsAxenda={
              this.handleFilteringActualMonthEventsAxenda
            }
            handleFilteringNextMonthEventsAxenda={
              this.handleFilteringNextMonthEventsAxenda
            }
            handleFilteringThirdMonthEventsAxenda={
              this.handleFilteringThirdMonthEventsAxenda
            }
            resetVisibility={this.resetVisibility}
            eventsKey="axenda"
          />
          <Novas
            path="/novas"
            novasEvents={this.state.novas}
            handleFilteringActualMonthEventsNovas={
              this.handleFilteringActualMonthEventsNovas
            }
            handleFilteringNextMonthEventsNovas={
              this.handleFilteringNextMonthEventsNovas
            }
            handleFilteringThirdMonthEventsNovas={
              this.handleFilteringThirdMonthEventsNovas
            }
            resetVisibility={this.resetVisibility}
            eventsKey="novas"
          />
          <Convocatorias
            path="/convocatorias"
            convocatorias={this.state.convocatorias}
          />
          <InfoTeo path="/infoteo" />
          <Admin
            path="/admin"
            Convocatorias={this.loadSampleConvocatorias}
            Novas={this.loadSampleNovas}
            Axenda={this.loadSampleAxenda}
          />
          <Salvapantallas path="/salvapantallas" />
          <NotFound default />
          <EventDetailsAxenda
            exact
            path="/axenda/*/"
            //component={EventDetails}
            eventDetails={this.state.axenda}
          />
          <EventDetailsConvocatorias
            exact
            path="/convocatorias/*/"
            //component={EventDetails}
            eventDetails={this.state.convocatorias}
          />
          <EventDetailsNovas
            exact
            path="/novas/*/"
            //component={EventDetails}
            eventDetails={this.state.novas}
          />
        </Router>
      </div>
    );
  }
}

export default App;
