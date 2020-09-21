import React, { useState, useRef, useEffect } from "react";
import "./NavBar.scss";
import Logo from "../../assets/images/logo.png";
import { BsList } from "react-icons/bs";

const NavBar = ({ navbarStyle }) => {
  const [isPanelOpen, setPanel] = useState(false);
  const node = useRef();

  const OpenPanel = () => {
    setPanel(!isPanelOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      if (isPanelOpen) {
        setPanel(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isPanelOpen]);

  return (
    <nav className={navbarStyle}>
      <div>
        <a href="/#">
          <img src={Logo} href="#" className="logo" alt="logo" />
        </a>
      </div>
      <div>
        <div
          ref={node}
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
