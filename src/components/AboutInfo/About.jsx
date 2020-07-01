import React from "react";

import "./About.scss";

const About = ({ img, title, text }) => {
  return (
    <div className="test">
      <div className="carnavalesco">
        <img src={img} href="/#" alt="logo" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default About;
