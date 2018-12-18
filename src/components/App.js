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

class App extends React.Component {
  state = {
    sport: {
      title: "Deporte",
      events: {
        event1: {
          name: "sportEvento 1",
          image: {},
          date: "2018-11-15",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "sportEvento 2",
          image: {},
          date: "2018-12-22",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "sportEvento 3",
          image: {},
          date: "2018-12-29",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "sportEvento 4",
          image: {},
          date: "2019-01-30",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event5: {
          name: "sportEvento 5",
          image: {},
          date: "2019-01-31",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event6: {
          name: "sportEvento 6",
          image: {},
          date: "2019-02-26",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        }
      }
    },
    culture: {
      title: "Cultura",
      events: {
        event1: {
          name: "cultureEvento 1",
          image: {},
          date: "2018-11-15",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "cultureEvento 2",
          image: {},
          date: "2018-12-22",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "cultureEvento 3",
          image: {},
          date: "2018-12-29",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "cultureEvento 4",
          image: {},
          date: "2019-01-30",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event5: {
          name: "cultureEvento 5",
          image: {},
          date: "2019-01-31",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event6: {
          name: "cultureEvento 6",
          image: {},
          date: "2019-02-26",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        }
      }
    },
    notifications: {
      title: "Listado de Avisos e Notificacions",
      events: {
        event1: {
          name: "notificationsEvento 1",
          image: {},
          date: "2018-11-15",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "notificationsEvento 2",
          image: {},
          date: "2018-12-22",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "notificationsEvento 3",
          image: {},
          date: "2018-12-29",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "notificationsEvento 4",
          image: {},
          date: "2019-01-30",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event5: {
          name: "notificationsEvento 5",
          image: {},
          date: "2019-01-31",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event6: {
          name: "notificationsEvento 6",
          image: {},
          date: "2019-02-26",
          visible: true,
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        }
      }
    }
  };

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

  render() {
    return (
      <>
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
            eventsKey="sport"
          />
          <Avisos path="/avisos" notifications={this.state.notifications} />
          <InfoTeo path="/infoteo" />
          <Admin path="/admin" />
          <Salvapantallas path="/salvapantallas" />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
