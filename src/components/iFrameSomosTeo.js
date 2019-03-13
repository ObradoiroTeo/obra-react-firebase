import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class IframeSomosTeo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    .gatito {
      background: black;
      border-radius: 5px;
      padding: 8px;
      width: 100%;
      height: 800px;
    }
    </style>
    <embed class='gatito' src='http://hbo.es' />
    `;
  }
}

window.customElements.define("somos-teo", IframeSomosTeo);

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <somos-teo />
        <Footer />
      </>
    );
  }
}

export default Home;
