import React from "react";
import { Router } from "@reach/router";

import App from "./App";
import Home from "./Home";
import Cultura from "./Cultura";
import Deporte from "./Deporte";
import Avisos from "./Avisos";
import InfoTeo from "./InfoTeo";
import Admin from "./Admin";
import Salvapantallas from "./Salvapantallas";

const Routes = () => (
  <Router>
    <App path="/">
      <Home path="/" />
      <Cultura path="/cultura" />
      <Deporte path="/deporte" />
      <Avisos path="/avisos" />
      <InfoTeo path="/infoTeo" />
      <Admin path="/admin" />
      <Salvapantallas path="/salvapantallas" />
    </App>
  </Router>
);

export default Routes;
