import React from "react";
import cellphone from "../../assets/images/Component2.png";
import "./Mockup.scss";

const Mockup = () => {
  return (
    <div className="teste">
      <img
        src={cellphone}
        href="/#"
        className="cellphoneDir"
        alt="cellphone-mockup"
      ></img>
    </div>
  );
};

export default Mockup;
