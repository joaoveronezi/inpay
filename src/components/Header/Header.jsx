import React, { useState, useEffect } from "react";
import "./Header.scss";
import classnames from "classnames";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const Scrollpos = prevScrollpos;
      const currentScrollpos = window.pageYOffset;
      const visible = Scrollpos > currentScrollpos;

      setPrevScrollpos(currentScrollpos);
      setVisible(visible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollpos]);

  return (
    <NavBar
      navbarStyle={classnames("navbar", {
        "navbar--hidden": !visible,
      })}
    />
  );
};

export default Header;
