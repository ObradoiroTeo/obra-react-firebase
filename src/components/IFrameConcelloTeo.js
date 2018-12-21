import React from "react";
import Iframe from "react-iframe";

import Header from "./Header";

class IframeConcelloTeo extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Iframe
          url="http://ver.movistarplus.es/"
          width="100%"
          height="800px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default IframeConcelloTeo;
