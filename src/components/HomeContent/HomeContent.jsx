import React from "react";
import "./HomeContent.scss";
import cellphone from "../../assets/images/Component3.png";
import arrow from "../../assets/images/seta.gif";

const HomeContent = () => {
  return (
    <div className="HomeContent">
      <div className="Lside">
        <img
          src={cellphone}
          href="/#"
          className="cellphoneDir"
          alt="cellphone-mockup"
        ></img>
      </div>
      <div className="Rside">
        <p>
          Não é sobre <strong>dinheiro</strong>, mas sim sobre{" "}
          <strong>sonhos!</strong>
        </p>
        <h6>#VemProAzul </h6>
      </div>
      <a href="#quemsomos">
        <img src={arrow} className="arrow" alt="Arrow pointing down"></img>
      </a>
    </div>
  );
};

export default HomeContent;
