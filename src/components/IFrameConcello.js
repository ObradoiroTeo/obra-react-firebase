import React from "react";
import Iframe from "react-iframe";

import Header from "./Header";

const IFrameConcello = props => (
  <div>
    <Header />
    <Iframe
      url="https://www.youtube.com/embed/5PwXNb5Bbbo"
      width="100%"
      height="480px"
      className="myClassname"
      display="initial"
      position="relative"
      allowFullScreen
    />
  </div>
);

export default IFrameConcello;
