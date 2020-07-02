import React from "react";

import "./About.scss";

const About = ({ img, title, text, turn }) => {
  return (
    <div className={turn ? "AboutVirado" : "About"}>
      <div className="aboutImg">
        <img src={img} href="/#" alt="logo" className="art" />
      </div>
      <div className="aboutText">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default About;
