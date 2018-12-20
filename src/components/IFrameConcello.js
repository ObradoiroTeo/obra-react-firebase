import React from "react";
import Iframe from "react-iframe";

import Header from "./Header";

const IFrameConcello = props => (
  <div>
    <Header />
    <Iframe
      url="https://somos.teo.gal/"
      width="100%"
      height="90%"
      className="myClassname"
      display="initial"
      position="relative"
      allowFullScreen
    />
  </div>
);

export default IFrameConcello;
