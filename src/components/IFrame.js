import React from "react";

import Iframe from "react-iframe";
import Header from "./Header";
import SectionEvents from "./SectionEvents";

class IFrame extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Iframe
          url="https://www.youtube.com/embed/ixkoVwKQaJg"
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
