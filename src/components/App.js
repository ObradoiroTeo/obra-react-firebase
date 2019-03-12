/**
 * Componente general que unifica todas las funcionalidades de la aplicación y las conecta entre si.
 */
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
import IFrameConcelloTeo from "./iFrameConcelloTeo";
import IFrameSomosTeo from "./iFrameSomosTeo";

import sampleConvocatorias from "../sample-Convocatorias.json";
import sampleNovas from "../sample-Novas.json";
import base from "../base";
import sampleAxenda from "../sample-Axenda.json";

// App contiene practicamente toda la funcionalidad de nuetra Pagina Wed 👇
// state es donde se guarda toda la informacion de los eventos dividiendolos en novas, axenda y convocatorias

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      novas: {},
      axenda: {},
      convocatorias: {}
    };
  }

  /*componentDidMount() {
    this.fetchData();
  }

  // Esta funcion coge los datos en formato JSON de la url y mete esta informacion en el estado dividiendolos en los tres campos. 👇
  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(novas => {
        this.setState({ novas: novas });
      });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(axenda => {
        this.setState({ axenda: axenda });
      });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(convocatorias => {
        this.setState({ convocatorias: convocatorias });
      });
  }

*/

  // FUNCION DE RESERVA -> En caso de que tengamos problemas con las url de arriba podemos usar estas funciones para la misma funcionalidad. Pero en este caso coge la informacion de (sampleConvocatorias, sampleNovas y sampleAxenda) archivos que tenemos que crear. 👇

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

  // Esta funcion es la que usamos para los botones de filtrado por meses. Se usa para que los botones de los meses se actualicen automaticamente 👇
  getNextMonth = actualMonth => {
    let nextMonth = actualMonth + 1;
    if (nextMonth > 11) {
      nextMonth = nextMonth - 12;
    }
    return nextMonth;
  };

  // Funcion para filtrar por el mes actual. Obtiene la fecha de hoy y las compara con las de los eventos, si el mes coincide entonces los deja visibles, en caso de no coincidir los desabilita y no los vemos en pantalla. 👇
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

  // Esta funcion es igual que la anterior pero en vez de comparar los eventos con el mes actual los compara con el mes siguiente. 👇
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

  // Igual que las dos anteriores pero compara con el tercer mes. 👇
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

  // Hace exactamento lo mismo que la funcion (handleFilteringActualMonthEventsAxenda) pero esta vez se usa para los eventos de Novas. 👇
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

  // Hace exactamento lo mismo que la funcion (handleFilteringNextMonthEventsAxenda) pero esta vez se usa para los eventos de Novas. 👇
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

  // Hace exactamento lo mismo que la funcion (handleFilteringThirdMonthEventsAxenda) pero esta vez se usa para los eventos de Novas. 👇
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

  // Esta funcion es la que resetea el valor de visibilidad (este es el valor que hace que se muestren los eventos en pantalla o no). 👇
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

  // Dentro del Render podemos ver toda la informacion que pasamos de App a otros componentes mediante props. Ademas de las rutas que se mostraran en la url. 👇
  // El path es la ruta que aparecera en la url de la pagina web.
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
            eventDetails={this.state.axenda}
          />
          <EventDetailsConvocatorias
            exact
            path="/convocatorias/*/"
            eventDetails={this.state.convocatorias}
          />
          <EventDetailsNovas
            exact
            path="/novas/*/"
            eventDetails={this.state.novas}
          />
          <IFrameConcelloTeo path="/concelloteo" />
          <IFrameSomosTeo path="/somosteo" />
        </Router>
      </div>
    );
  }
}

export default App;
