import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class IframeConcelloTeo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    .concelloTeo {
      background: #0a4fc2;
      padding: 5px;

      width: 100%;
      height: 800px;
      box-sizing: border-box;
    }
    </style>
    <embed class='concelloTeo' src='https://www.xunta.gal/portada' />
    `;
  }
}

window.customElements.define("concello-teo", IframeConcelloTeo);

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <concello-teo />
        <Footer />
      </>
    );
  }
}

export default Home;
