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
      background: yellow;
      border-radius: 5px;
      padding: 8px;
    }
    </style>
    <img class='gatito' src='/images/LindoGatito.jpg' />
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
