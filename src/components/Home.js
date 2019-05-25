import React from "react";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <div className="texto-inicio">
          {/*<img
            src="/images/logoObradoiroGrande.jpg"
            className="logo-obradoiro"
            alt="logo-obradoiro"
          />*/}
          <p className="logo-titulo">
            Obradoiro Emprego Habilits
            <br />
            Desenvolvemento de Aplicacións con Tecnoloxía Web
          </p>
          <p className="texto-titulo">
            <br />
            <br />
            Benvidos á nova aplicación do Concello de Teo, onde se poderá
            consultar a axenda do concello cas súas respectivas novas, así como
            as distintas actividades oficiais para informarse de prazos,
            solicitudes e demais.
            <br />
            <br />
            Se te perdiches algún número da nosa revista mensual InformaTeo,
            aquí poderase botar unha ollada.
            <br />
            <br />
            Dende á aplicación tamén podese acceder á paxina web oficial do
            Concello de Teo e tamén á de SomosTeo.
          </p>
        </div>
      </>
    );
  }
}

export default Home;
