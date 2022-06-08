import React, { useState, useEffect } from "react";
import axios from "axios";
import LikeCard from "./LikeCard";
import Header from "./Header";
import Footer from "./Footer";


const MyPlants = () => {
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8007/api/favourite")
      .then((res) => {
        setMyPlants(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <Header />
    <div className="sp-container">
      <h1>My favorite plants 💕</h1>
      {
        <div className="plant-list">
      {myPlants.map((myPlant) => (
        <LikeCard
          key={myPlant.id}
          id={myPlant.id}
          name={myPlant.name}
          img={myPlant.img}
        />
      ))}
      </div>
      }

    </div>

   <Footer />
    </>
  );
};

export default MyPlants;
