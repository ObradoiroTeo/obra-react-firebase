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
    deporte: { title: "Deporte" },
    cultura: { title: "Cultura" },
    avisos: { title: "Listado de Avisos e Notificacions" },
    meses: { mes1: "Enero", mes2: "Febrero", mes3: "Marzo" },
    eventos: {
      eventoUno: {
        name: "Evento 1",
        image: {},
        fecha: "10/12/18",
        desc:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
      },
      eventoDos: {
        name: "Evento 2",
        image: {},
        fecha: "15/12/18",
        desc:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
      },
      eventoTres: {
        name: "Evento 3",
        image: {},
        fecha: "20/12/18",
        desc:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
      },
      eventoCuatro: {
        name: "Evento 4",
        image: {},
        fecha: "25/12/18",
        desc:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, excepturi?"
      }
    }
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
