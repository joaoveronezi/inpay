import React from "react";

import "./QuemSomos.scss";
import About from "../AboutInfo";
import img from "../../assets/images/Rectangle.png";

const QuemSomos = () => {
  return (
    <div id="quemsomos">
      <About img={img} title={"Quem somos"} text={"teste"} />
      <About img={img} title={"Onde queremos chegar"} text={"teste"} />
      <About img={img} title={"Em que acreditamos"} text={"teste"} />
    </div>
  );
};

export default QuemSomos;
