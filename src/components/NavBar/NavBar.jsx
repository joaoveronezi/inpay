import React, { useState } from "react";
import "./NavBar.scss";
import Logo from "../../assets/images/logo.png";
import { FaAlignRight } from "react-icons/fa";

const NavBar = ({ navbarStyle }) => {
  const [isPanelOpen, setPanel] = useState(false);

  const OpenPanel = () => {
    setPanel(!isPanelOpen);
  };

  return (
    <nav className={navbarStyle}>
      <div>
        <img src={Logo} href="/#" className="logo" alt="logo"></img>
      </div>
      <div>
        <div
          id="mySidepanel"
          className="sidepanel"
          style={{ width: isPanelOpen ? "250px" : "0px" }}
        >
          <a className="closebtn" href="/" onClick={OpenPanel}>
            ×
          </a>
          <a href="/#">Home</a>
          <a href="/#">Quem somos</a>
          <a href="/#">Serviços</a>
          <a href="/#">Contato</a>
        </div>
        <button className="openbtn" onClick={OpenPanel}>
          <FaAlignRight />
        </button>
      </div>
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">Quem somos</a>
        </li>
        <li>
          <a href="/#">Serviços</a>
        </li>
        <li>
          <a href="/#">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
