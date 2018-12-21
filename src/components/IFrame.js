import React from "react";

import Iframe from "react-iframe";
import Header from "./Header";

class IFrame extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Iframe
          url="https://onedrive.live.com/about/es-es/signin/"
          width="100%"
          height="90%"
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

export default IFrame;
