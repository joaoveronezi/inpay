import React from "react";

import "./QuemSomos.scss";
import About from "../AboutInfo";
import img1 from "../../assets/images/MocaDindin3.png";
import img2 from "../../assets/images/MocoGrafico2.png";
import img3 from "../../assets/images/MocaVoando2.png";

const QuemSomos = () => {
  const text1 =
    "Somos uma fintech que nasceu com o proposito de melhorar a vida financeira das pessoas." +
    " Nosso proposito é realizar sonhos através da educação" +
    " financeira" +
    " e das melhores práticas de planejamento e estratégicas de investimento conforme cada perfil.";
  const text2 =
    "Temos como meta ser referência e lider em inclusão de pessoas e empresas à boas praticas de planejamento / gestão financeira e investimento.";
  const text3 =
    "Nossos valores se fundamentam em educação para todos, transparência e empoderamento das pessoas quando o assunto é se planejar e investir.";
  return (
    <div id="quemsomos">
      <About img={img1} title={"Quem somos nós"} text={text1} turn={false} />
      <About
        img={img2}
        title={"Onde queremos chegar"}
        text={text2}
        turn={true}
      />

      <About
        img={img3}
        title={"Em que acreditamos"}
        text={text3}
        turn={false}
      />
      <p className="Escrito"> - Sobre Nós</p>
    </div>
  );
};

export default QuemSomos;
