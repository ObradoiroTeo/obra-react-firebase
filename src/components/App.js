import React from "react";
import { Router } from "@reach/router";

import "../index.css";

import Home from "./Home";
import Cultura from "./Cultura";
import Deporte from "./Deporte";
import Avisos from "./Avisos";
import InfoTeo from "./InfoTeo";
import Admin from "./Admin";
import Salvapantallas from "./Salvapantallas";
import NotFound from "./NotFound";

import base from "../base.js";
import sampleAvisos from "../sample-avisos";
import sampleDeporte from "../sample-deporte";
import sampleCultura from "../sample-cultura";

class App extends React.Component {
  state = {
    sport: {},
    culture: {},
    notifications: {}
  };

  loadSampleAvisos = () => {
    this.setState({
      notifications: sampleAvisos
    });
  };
  loadSampleCultura = () => {
    this.setState({
      culture: sampleCultura
    });
  };

  loadSampleDeporte = () => {
    this.setState({
      sport: sampleDeporte
    });
  };

  componentDidMount() {
    this.ref = base.syncState(`notification`, {
      context: this,
      state: `notification`
    });

    this.ref = base.syncState(`culture`, {
      context: this,
      state: `culture`
    });

    this.ref = base.syncState(`sport`, {
      context: this,
      state: `sport`
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

  render() {
    return (
      <div className="body-background">
        <Router>
          <Home path="/" />
          <Cultura
            path="/cultura"
            cultureEvents={this.state.culture}
            handleFilteringActualMonthEvents={
              this.handleFilteringActualMonthEvents
            }
            handleFilteringNextMonthEvents={this.handleFilteringNextMonthEvents}
            handleFilteringThirdMonthEvents={
              this.handleFilteringThirdMonthEvents
            }
            resetVisibility={this.resetVisibility}
            eventsKey="culture"
          />
          <Deporte
            path="/deporte"
            sportEvents={this.state.sport}
            handleFilteringActualMonthEvents={
              this.handleFilteringActualMonthEvents
            }
            handleFilteringNextMonthEvents={this.handleFilteringNextMonthEvents}
            handleFilteringThirdMonthEvents={
              this.handleFilteringThirdMonthEvents
            }
            resetVisibility={this.resetVisibility}
            eventsKey="sport"
          />
          <Avisos path="/avisos" notifications={this.state.notifications} />
          <InfoTeo path="/infoteo" />
          <Admin
            path="/admin"
            Avisos={this.loadSampleAvisos}
            Deportes={this.loadSampleDeporte}
            Cultura={this.loadSampleCultura}
          />
          <Salvapantallas path="/salvapantallas" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;
