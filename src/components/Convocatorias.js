import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import SectionEventsConvocatorias from "./SectionEventsConvocatorias";
import Footer from "./Footer";

class Convocatorias extends React.Component {
  static propTypes = {
    convocatorias: PropTypes.shape({
      title: PropTypes.string.isRequired,
      events: PropTypes.object.isRequired
    }).isRequired
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <SectionTitle title={this.props.convocatorias.title} />
        </div>
        <div>
          <SectionEventsConvocatorias
            events={this.props.convocatorias.events}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Convocatorias;
