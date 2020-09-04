import React from "react";

import "../assets/base/App.css";

import Home from "../components/Home";
import QuemSomos from "../components/QuemSomos";
import Servicos from "../components/Servicos";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div className="App">
      <Home />
      <QuemSomos />
      <Servicos />
      <Footer />
    </div>
  );
};

export default App;
