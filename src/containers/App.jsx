import React from "react";

import "../assets/base/App.css";

import Home from "../components/Home";
import QuemSomos from "../components/QuemSomos";
import Servicos from "../components/Servicos";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const App = () => {
  return (
    <div className="App">
      <Home />
      <QuemSomos />
      <Servicos />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
