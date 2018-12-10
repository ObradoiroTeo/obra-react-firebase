import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import Cultura from "./Cultura";
import Deporte from "./Deporte";
import Avisos from "./Avisos";
import InfoTeo from "./InfoTeo";
import Admin from "./Admin";
import Salvapantallas from "./Salvapantallas";

import Deporte from "./Deporte";
import Cultura from "./Cultura";
import Avisos from "./Avisos";

class App extends React.Component {
  state = {
    deporte: { title: "Deporte" },
    cultura: { title: "Cultura" },
    avisos: { title: "Listado de Avisos e Notificacions" },
    meses: { mes1: "Enero", mes2: "Febrero", mes3: "Marzo" }
  };

  render() {
    console.log(this.props.children);
    return (
      <>
        <h1>App</h1>
        <Router>
          <Home path="/" />
          <Cultura
            path="/cultura"
            cultureEvents={this.state.cultura}
            months={this.state.meses}
          />
          <Deporte
            path="/deporte"
            sportEvents={this.state.deporte}
            months={this.state.meses}
          />
          <Avisos
            path="/avisos"
            notifications={this.state.avisos}
            months={this.state.meses}
          />
          <InfoTeo path="/infoteo" />
          <Admin path="/admin" />
          <Salvapantallas path="/salvapantallas" />
        </Router>
      </>
    );
  }
}

export default App;
