import React from "react";

import "./QuemSomos.scss";
import About from "../AboutInfo";
import img from "../../assets/images/Rectangle.png";

const QuemSomos = () => {
  const text1 =
    "Somos uma fintech que nasceu com o proposito de melhorar a vida financeira das pessoas." +
    " Nosso proposito é realizar sonhos através da educação" +
    " financeira" +
    "e das melhores práticas de planejamento e estratégicas de investimento conforme cada perfil.";
  const text2 =
    "Temos como meta ser referência e lider em inclusão de pessoas e empresas à boas praticas de planejamento / gestão financeira e investimento.";
  const text3 =
    "Nossos valores se fundamentam em educação para todos, transparência e empoderamento das pessoas quando o assunto é se planejar e investir.";
  return (
    <div id="quemsomos">
      <About img={img} title={"Quem somos nós"} text={text1} turn={false} />
      <About
        img={img}
        title={"Onde queremos chegar"}
        text={text2}
        turn={true}
      />
      <About img={img} title={"Em que acreditamos"} text={text3} turn={false} />
    </div>
  );
};

export default QuemSomos;
