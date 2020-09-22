import React from "react";

import "./Banner.scss";
import mockMac from "../../assets/images/mockMacBook.png";
import mockIphone from "../../assets/images/mockIphone.png";
import Planilha from "../../assets/download/planilha_oficial_inpay.xlsx";
import Livro from "../../assets/download/ebook_inpay.pdf";

const Banner = () => {
  return (
    <div className="BannerContainer">
      <div className="mocksContainer">
        <img src={mockMac} className="mockMacBook" alt="Planilhas" />
        <img src={mockIphone} className="mockIphone" alt="E-book" />
      </div>
      <div className="textContainer">
        <h2>Material de apoio</h2>
        <p>
          Aqui, você encontrará materiais de estudo e acompanhamento financeiro,
          confeccionado pela nossa equipe. Tudo isso para te ajudar da melhor
          maneira possível!
        </p>
        <div className="botoesContainer">
          <button>
            <a href={Livro} download>
              E-Book 1
            </a>
          </button>
          <button>
            <a href={Planilha} download>
              Planiha Oficial
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
