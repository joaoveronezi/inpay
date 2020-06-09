import React from "react";

import "./Valores.scss";

const Valores = () => {
  return (
    <div className="QuemSomosDiv">
      <div className="visao">
        <h1>Visão</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          lobortis dolor velit, et dictum odio tristique sit amet. Curabitur id
          rutrum erat.
        </p>
      </div>
      <div className="missao">
        <h1>Missão</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          <span className="blue "> lobortis</span> dolor velit, et dictum odio
          tristique sit amet. Curabitur id rutrum erat.
        </p>
      </div>
      <div className="valores">
        <h1>Valores</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          <span className="blue "> lobortis</span> dolor velit, et dictum odio
          tristique sit amet. Curabitur id rutrum erat.
        </p>
      </div>
    </div>
  );
};

export default Valores;
