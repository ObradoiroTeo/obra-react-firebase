// Este componente es el que se encarga de mostrar dentro de un Web Component la pagina del Concello de Teo.
// Dentro del <style> de concello modificamos un poco el css pero solo el de este componente en concreto.
// Dentro del src ponemos el link de la pagina que queremos abrir dentro de este Web Component.

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class IframeConcelloTeo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    .concello {
      background: black;
      border-radius: 5px;
      padding: 8px;
      width: 100%;
      height: 800px;
    }
    </style>
    <embed class='concello' src='http://ver.movistarplus.es/' />
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
