import React from "react";
import "./HomeContent.scss";
import cellphone from "../../assets/images/Frame.png";
import arrow from "../../assets/images/seta.gif";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const HomeContent = () => {
  return (
    <div className="HomeContent">
      <div className="Lside">
        <Slide bottom duration={1000}>
          <img
            src={cellphone}
            href="/#"
            className="cellphoneDir"
            alt="cellphone-mockup"
          />
        </Slide>
      </div>
      <Fade bottom delay={1000}>
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
      </Fade>
    </div>
  );
};

export default HomeContent;
