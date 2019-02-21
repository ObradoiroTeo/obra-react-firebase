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
import EventDetails from "./EventDetails";

import base from "../base.js";
import sampleConvocatorias from "../sample-Convocatorias";
import sampleNovas from "../sample-Novas";
import sampleAxenda from "../sample-Axenda";
import button from "./Buttons";

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

  handleFilteringActualMonthEvents = eventsKey => {
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

  handleFilteringNextMonthEvents = eventsKey => {
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

  handleFilteringThirdMonthEvents = eventsKey => {
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

  handleBotoncitosDelDemonio = eventsKey => {
    const actualMonth = { ...button };

    const eventsToFilter = { ...this.state[eventsKey].events };
    const filteredEvents = Object.keys(eventsToFilter).map(eventKey => {
      const filtradoPorTipo = eventsToFilter[eventKey].tipo;
      if (actualMonth === filtradoPorTipo) {
        eventsToFilter[eventKey].visible = true;
      } else {
        eventsToFilter[eventKey].visible = false;
      }
      return eventsToFilter[eventKey];
    });

    this.setState({ [`${eventsKey}.events`]: filteredEvents });
  };

  render() {
    return (
      <div className="body-background">
        <Router>
          <Home path="/" />
          <Axenda
            path="/axenda"
            axendaEvents={this.state.axenda}
            handleFilteringActualMonthEvents={
              this.handleFilteringActualMonthEvents
            }
            handleFilteringNextMonthEvents={this.handleFilteringNextMonthEvents}
            handleFilteringThirdMonthEvents={
              this.handleFilteringThirdMonthEvents
            }
            resetVisibility={this.resetVisibility}
            handleBotoncitosDelDemonio={this.handleBotoncitosDelDemonio}
            eventsKey="axenda"
          />
          >
           <EventDetails
             path="/eventdetails"
              // eventDetails={this.state.axenda.events.events5}
            />
          </Axenda>
          
          <Novas
            path="/novas"
            novasEvents={this.state.novas}
            handleFilteringActualMonthEvents={
              this.handleFilteringActualMonthEvents
            }
            handleFilteringNextMonthEvents={this.handleFilteringNextMonthEvents}
            handleFilteringThirdMonthEvents={
              this.handleFilteringThirdMonthEvents
            }
            resetVisibility={this.resetVisibility}
            handleBotoncitosDelDemonio={this.handleBotoncitosDelDemonio}
            eventsKey="novas"
          />
          <Convocatorias
            path="/convocatorias"
            convocatorias={this.state.convocatorias}
            handleBotoncitosDelDemonio={this.handleBotoncitosDelDemonio}
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
          <EventDetails
            path="/eventdetails"
            // eventDetails={this.state.culture.events.event3}
          />
        </Router>
      </div>
    );
  }
}

export default App;
