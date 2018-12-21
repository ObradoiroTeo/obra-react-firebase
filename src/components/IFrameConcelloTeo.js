import React from "react";
import IFrame from "react-iframe";

import Header from "./Header";
import Footer from "./Footer";

class IframeConcelloTeo extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <IFrame
          url="http://ver.movistarplus.es/"
          width="100%"
          height="800px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
        <Footer />
      </div>
    );
  }
}

export default IframeConcelloTeo;
