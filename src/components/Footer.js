import React from "react";
import concelloTeo from "../images/logo_pequeno.png";
import concelloStgo from "../images/concello-santiago.jpg";
import europa from "../images/union-europea.jpg";
import xunta from "../images/xunta-galicia.jpg";

class Footer extends React.Component {
  render() {
    return (
      <span className="footer-container">
        <img src={europa} className="logo-ue" alt="logo-ue" />
        <img src={concelloStgo} className="logo-stgo" alt="logo-stgo" />
        <img src={concelloTeo} className="logo-teo" alt="logo-teo" />
        <img src={xunta} className="logo-xunta" alt="logo-xunta" />
      </span>
    );
  }
}

export default Footer;
