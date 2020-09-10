import React from "react";

import "./Banner.scss";
import Ebook from "../../assets/images/icons/ebook.png";
import Planilha from "../../assets/images/icons/planilha.png";

const Banner = () => {
  return (
    <div className="BannerContainer">
      <div>
        <h2>Baixe Nosso E-book de graça</h2>
        <img src={Ebook} />
      </div>
      <div>
        <h2>Ou se preferir, planilhas para te ajudar</h2>
        <img src={Planilha} />
      </div>
    </div>
  );
};
export default Banner;
