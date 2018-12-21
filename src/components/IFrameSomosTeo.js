import React from "react";
import Iframe from "react-iframe";

import Header from "./Header";
import Footer from "./Footer";

const IFrameSomosTeo = props => (
  <div>
    <Header />
    <Iframe
      url="https://es.hboespana.com/sign-in"
      width="100%"
      height="800px"
      className="myClassname"
      display="initial"
      position="relative"
      allowFullScreen
    />
    <Footer />
  </div>
);

export default IFrameSomosTeo;
