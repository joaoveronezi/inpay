import React from "react";

import "./QuemSomos.scss";
import About from "../AboutInfo";
import img1 from "../../assets/images/MocaDindin3.png";
import img2 from "../../assets/images/MocoGrafico2.png";
import img3 from "../../assets/images/MocaVoando2.png";

const QuemSomos = () => {
  const text = [
    "Somos uma fintech que nasceu com o propósito de melhorar a vida financeira das pessoas. Nosso intuito é realizar sonhos através da educação financeira e das melhores práticas de planejamento e estratégias de investimento, conforme cada perfil.",
    "Nossa meta é ser referência em inclusão de pessoas e empresas, às boas práticas de planejamento, gestão financeira e investimento.",
    "Nossos valores se fundamentam em educação financeira para todos, transparência e empoderamento de pessoas quando o assunto é se planejar e investir.",
  ];
  return (
    <div id="quemsomos">
      <About img={img1} title={"Quem somos nós"} text={text[0]} turn={false} />
      <About
        img={img2}
        title={"Onde queremos chegar"}
        text={text[1]}
        turn={true}
      />

      <About
        img={img3}
        title={"Em que acreditamos"}
        text={text[2]}
        turn={false}
      />
      <p className="Escrito"> - Sobre Nós</p>
    </div>
  );
};

export default QuemSomos;
