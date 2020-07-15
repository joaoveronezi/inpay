import React from "react";

import "./Card.scss";

const Card = ({
  image,
  title,
  alt,
  image2,
  title2,
  alt2,
  image3,
  title3,
  alt3,
}) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={image} alt={alt} className="cardImage" />
        <h3 className="cardTitle">{title}</h3>
      </div>
      <div className="card">
        <img src={image2} alt={alt2} className="cardImage" />
        <h3 className="cardTitle">{title2}</h3>
      </div>
      <div className="card">
        <img src={image3} alt={alt3} className="cardImage" />
        <h3 className="cardTitle">{title3}</h3>
      </div>
    </div>
  );
};

export default Card;
