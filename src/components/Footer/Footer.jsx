import React from "react";

import Logo from "../../assets/images/logo.png";
import FacebookIcon from "../../assets/images/icons/facebook.png";
import InstagramIcon from "../../assets/images/icons/instagram.png";
import LinkedinIcon from "../../assets/images/icons/linkedin.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="style">
      <div id="footerContainer">
        <div className="LSideContato">
          <a href="/#">
            <img src={Logo} className="logoFooter" alt="logo" />
          </a>
          <div className="Logos">
            <a href="/#">
              <img src={FacebookIcon} className="socialLogo" alt="logo" />
            </a>
            <a href="/#">
              <img src={LinkedinIcon} className="socialLogo" alt="logo" />
            </a>
            <a href="/#">
              <img src={InstagramIcon} className="socialLogo" alt="logo" />
            </a>
          </div>
        </div>
        <div className="RSideContato">
          <p>
            Avenida Barão Homem de Melo 4508 5° Andar, sala 511 <br />
            Belo Horizonte - MG,
            <br />
            Brazil 30494-270
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2020 - INPAY Soluções Financeiras - Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
