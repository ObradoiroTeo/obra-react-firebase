// Este componente es el que se encarga de mostrar dentro de un Web Component la pagina de Somos Teo.
// Dentro del <style> de somosteo modificamos un poco el css pero solo el de este componente en concreto.
// Dentro del src ponemos el link de la pagina que queremos abrir dentro de este Web Component.

import React from "react";
import Header from "./Header";

class IframeSomosTeo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    .somosTeo {
      background: black;
      border-radius: 5px;
      padding: 8px;
      width: 100%;
      height: 800px;
    }
    </style>
    <embed class='somosTeo' src='https://www.edu.xunta.es/webmail/login.php' />
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
      </>
    );
  }
}

export default Home;
