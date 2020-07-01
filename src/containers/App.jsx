import React from "react";

import "../assets/base/App.css";

import Home from "../components/Home";
import QuemSomos from "../components/QuemSomos";
// import Servicos from "../components/Servicos";

const App = () => {
  return (
    <div className="App">
      <Home />
      <QuemSomos />
    </div>
  );
};

export default App;
