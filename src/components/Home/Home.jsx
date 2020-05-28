import React from "react";

import "./Home.scss";
import Header from "../Header";
import HomeContent from "../HomeContent";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomeContent />
    </div>
  );
};

export default Home;
