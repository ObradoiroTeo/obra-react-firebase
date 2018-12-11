import React from "react";
import { Router } from "@reach/router";

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
          date: "10/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "sportEvento  2",
          image: {},
          date: "15/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "sportEvento  3",
          image: {},
          date: "20/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "sportEvento  4",
          image: {},
          date: "25/12/18",
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
          date: "10/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "cultureEvento 2",
          image: {},
          date: "15/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "cultureEvento 3",
          image: {},
          date: "20/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "cultureEvento 4",
          image: {},
          date: "25/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        }
      }
    },
    notifications: {
      title: "Listado de Avisos e Notificacions",
      events: {
        event1: {
          name: "notification 1",
          image: {},
          date: "10/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event2: {
          name: "notification 2",
          image: {},
          date: "15/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event3: {
          name: "notification 3",
          image: {},
          date: "20/12/18",
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
        },
        event4: {
          name: "notification 4",
          image: {},
          date: "25/12/18",
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
          <Cultura path="/cultura" cultureEvents={this.state.culture} />
          <Deporte path="/deporte" sportEvents={this.state.sport} />
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
