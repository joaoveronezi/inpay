import React from "react";
import "./HomeContent.scss";
import cellphone from "../../assets/images/Component3.png";

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
          <strong>sonhos</strong>
        </p>
      </div>
    </div>
  );
};

export default HomeContent;
