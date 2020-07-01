import React from "react";

import "./About.scss";

const About = ({ title, text }) => {
  return (
    <div className="test">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default About;
