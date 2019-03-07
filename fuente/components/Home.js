import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class MeParecioVerUnLindoGatito extends HTMLElement {
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
    <embed class='gatito' src='http://ver.movistarplus.es/' />
    `;
  }
}

window.customElements.define("imagen-gatito", MeParecioVerUnLindoGatito);

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <imagen-gatito />
        <Footer />
      </>
    );
  }
}

export default Home;
