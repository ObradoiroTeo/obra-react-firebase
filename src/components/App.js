import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import Cultura from "./Cultura";
import Deporte from "./Deporte";
import Avisos from "./Avisos";
import InfoTeo from "./InfoTeo";
import Admin from "./Admin";
import Salvapantallas from "./Salvapantallas";

class App extends React.Component {
  state = {
    sport: {
      title: "Deporte",
      events: {
        event1: {
          name: "sportEvento 1",
          image: {},
          date: "15/11/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "sportEvento  2",
          image: {},
          date: "22/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "sportEvento  3",
          image: {},
          date: "29/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "sportEvento  4",
          image: {},
          date: "30/01/19",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event5: {
          name: "sportEvento  5",
          image: {},
          date: "31/01/19",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event6: {
          name: "sportEvento  6",
          image: {},
          date: "26/02/19",
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
          date: "15/11/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "cultureEvento  2",
          image: {},
          date: "22/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "cultureEvento  3",
          image: {},
          date: "29/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "cultureEvento  4",
          image: {},
          date: "30/01/19",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event5: {
          name: "cultureEvento  5",
          image: {},
          date: "31/01/19",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event6: {
          name: "cultureEvento  6",
          image: {},
          date: "26/02/19",
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
          date: "15/11/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "notificationsEvento  2",
          image: {},
          date: "22/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "notificationsEvento  3",
          image: {},
          date: "29/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "notificationsEvento  4",
          image: {},
          date: "30/01/19",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event5: {
          name: "notificationsEvento  5",
          image: {},
          date: "31/01/19",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event6: {
          name: "notificationsEvento  6",
          image: {},
          date: "26/02/19",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        }
      }
    }
  };

  render() {
    return (
      <>
        <h1>App</h1>
        <Router>
          <Home path="/" />
          <Cultura path="/cultura" />
          <Deporte path="/deporte" sportEvents={this.state.sport} />
          <Avisos path="/avisos" />
          <InfoTeo path="/infoteo" />
          <Admin path="/admin" />
          <Salvapantallas path="/salvapantallas" />
        </Router>
      </>
    );
  }
}

export default App;
