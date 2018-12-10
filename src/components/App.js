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
    deporte: { title: "🚀🤖👾 Deporte Testing (CHANGE ME)!" }
  };

  render() {
    return (
      <>
        <h1>App</h1>
        <Router>
          <Home path="/" />
          <Cultura path="/cultura" />
          <Deporte path="/deporte" sportEvents={this.state.deporte} />
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
