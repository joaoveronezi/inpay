import React from "react";
import "./NavBar.scss";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={Logo} className="logo"></img>
      </div>
      <ul className="right-item-container">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Quem somos</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
