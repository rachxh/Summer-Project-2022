import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const FavSingle = () => {

  const [favPlant, setFavPlant] = useState({});
  const [id, setId] = useState(useParams().id);


  return (
    <>
      <Header />
      <div className="sp-container">
        <h1>{favPlant.name}</h1>

        <div className="sp-card">
          <img src={favPlant.img} alt={favPlant.name}/>
          <div className="sp-text">
            <p className="sp-subtitle"> ☀️ Conditions: </p>
            <p className="plant-detail"> {favPlant.conditions}</p>
            <p className="sp-subtitle"> 💦 Water: </p>
            <p className="plant-detail">{favPlant.water}</p>
            <p className="sp-subtitle"> 🌱 Difficulty: </p>
            <p className="plant-detail">{favPlant.difficulty} </p>
    
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FavSingle;
