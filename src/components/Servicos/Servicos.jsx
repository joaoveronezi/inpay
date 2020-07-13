import React from "react";

import "./Servicos.scss";
import acomp from "../../assets/images/icons/acomp.png";
import amigo from "../../assets/images/icons/amigo.png";
import consul from "../../assets/images/icons/consul.png";
import invest from "../../assets/images/icons/invest.png";
import parceria from "../../assets/images/icons/parceria.png";
import plat from "../../assets/images/icons/plat.png";
import Card from "../Card/index";

const Servicos = () => {
  return (
    <div id="servicesContainer">
      <div className="servicesTitle">
        <h1>Serviços</h1>
      </div>
      <div className="serviceMosaic">
        <Card
          image={acomp}
          title="Acompanhamento Online"
          alt="Acompanhamento Online"
        />
        <Card
          image={plat}
          title="Plataforma Fácil e Adaptável"
          alt="Plataforma Fácil e Adaptável"
        />
        <Card
          image={consul}
          title="Consultoria Premium"
          alt="Consultoria Premium"
        />
        <Card
          image={amigo}
          title="Consórcio Entre Amigos"
          alt="Consórcio Entre Amigos"
        />
        <Card
          image={invest}
          title="Investimento Facilitado"
          alt="Investimento Facilitado"
        />
        <Card
          image={parceria}
          title="Parceria com Bancos e Corretoras"
          alt="Parceria com Bancos e Corretoras"
        />
      </div>
    </div>
  );
};

export default Servicos;
