import React from "react";

import Logo from "../../assets/images/logo.png";
import FacebookIcon from "../../assets/images/icons/facebook.png";
import InstagramIcon from "../../assets/images/icons/instagram.png";
import LinkedinIcon from "../../assets/images/icons/linkedin.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div id="footerContainer">
        <div className="LSideContato">
          <a href="/#">
            <img src={Logo} className="logoFooter" alt="logo" />
          </a>
          <div className="Logos">
            <a href="/#">
              <img src={FacebookIcon} className="socialLogo" alt="logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/inpay-solu%C3%A7%C3%B5es-financeiras/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={LinkedinIcon} className="socialLogo" alt="logo" />
            </a>
            <a
              href="https://www.instagram.com/in.pay"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={InstagramIcon} className="socialLogo" alt="logo" />
            </a>
          </div>
        </div>
        <div className="RSideContato">
          <p>
            Avenida Barão Homem de Melo 4500 5° Andar, sala 511 <br />
            Belo Horizonte - MG,
            <br />
            Brasil 30494-270
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
