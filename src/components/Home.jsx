import React from "react";
//import ReactDOM from "react-dom/client";

import "./Home.css";
import CardList from './CardList'

 function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <CardList />
      </div>
    </div>
  );
}

export default Home;
