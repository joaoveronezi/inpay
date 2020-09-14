import React from "react";

import "./Servicos.scss";
import acomp from "../../assets/images/icons/acomp.png";
import amigo from "../../assets/images/icons/amigo.png";
import consul from "../../assets/images/icons/consul.png";
import invest from "../../assets/images/icons/invest.png";
import parceria from "../../assets/images/icons/parceria.png";
import plat from "../../assets/images/icons/plat.png";
import Card from "../Card";

const Servicos = () => {
  return (
    <div className="servicesContainer">
      <p className="Servicos"> - Serviços Oferecidos</p>

      <div className="servicesTitle" id="servicesContainer">
        <h1>Serviços</h1>
      </div>
      <div className="serviceMosaic">
        <Card
          image={acomp}
          title="Acompanhamento Online"
          alt="Acompanhamento Online"
          image2={plat}
          title2="Plataforma Fácil e Adaptável"
          alt2="Plataforma Fácil e Adaptável"
          image3={consul}
          title3="Consultoria Premium"
          alt3="Consultoria Premium"
        />
        <Card
          image={amigo}
          title="Consórcio Entre Amigos"
          alt="Consórcio Entre Amigos"
          image2={invest}
          title2="Investimento Facilitado"
          alt2="Investimento Facilitado"
          image3={parceria}
          title3="Parceria com Bancos e Corretoras"
          alt3="Parceria com Bancos e Corretoras"
        />
      </div>
    </div>
  );
};

export default Servicos;
