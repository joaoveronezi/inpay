import React from "react";

import "./Card.scss";

const Card = ({ image, title, alt }) => {
  return (
    <div className="carContainer">
      <img src={image} alt={alt} className="cardImage" />
      <div>
        <h3 className="cardTitle">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
