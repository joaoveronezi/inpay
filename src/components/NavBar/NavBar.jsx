import React, { useState } from "react";
import "./NavBar.scss";
import Logo from "../../assets/images/logo.png";
import { BsList } from "react-icons/bs";

const NavBar = ({ navbarStyle }) => {
  const [isPanelOpen, setPanel] = useState(false);

  const OpenPanel = () => {
    setPanel(!isPanelOpen);
  };

  return (
    <nav className={navbarStyle}>
      <div>
        <a href="/#">
          <img src={Logo} href="#" className="logo" alt="logo" />
        </a>
      </div>
      <div>
        <div
          id="mySidepanel"
          className="sidepanel"
          style={{ width: isPanelOpen ? "250px" : "0px" }}
        >
          <button className="closebtn" onClick={OpenPanel}>
            ×
          </button>
          <a href="/#">Home</a>
          <a href="#quemsomos">Quem somos</a>
          <a href="#servicesContainer">Serviços</a>
          <a href="#footerContainer">Contato</a>
        </div>
        <button className="openbtn" onClick={OpenPanel}>
          <BsList />
        </button>
      </div>
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#quemsomos">Quem somos</a>
        </li>
        <li>
          <a href="#servicesContainer">Serviços</a>
        </li>
        <li>
          <a href="#footerContainer">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
