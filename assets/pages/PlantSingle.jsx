import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Layout from "../components/Layout";
import Header from "./Header";
import Footer from "./Footer";

const PlantSingle = () => {
  // const [setSubmit] = useState(false);
  const [item, setItem] = useState({});
  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    axios
      .get(`http://localhost:8007/api/plants/${id}`)
      .then((res) => {
        setItem(res.data);
        setId(res.data);
        console.log(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const saveData = (e) => {
  //   e.preventDefault();
  //   axios.post(`http://localhost:8007/api/plants`, id);
  //   setSubmit(true);
  // };

  let emptyName = "";
  // let secondName = (!emptyName) ? {item.name_2} : "None";

  return (
    <>
      <Header />
      <div className="sp-container">
        <h1>{item.name}</h1>

        <div className="sp-card">
          <img src={item.img} alt="" />
          <div className="sp-text">
            {/* <p className="sp-subtitle"> 🗂 Second Name:  </p>

        <p className="plant-detail"> </p>  */}
            <p className="sp-subtitle"> ☀️ Conditions: </p>
            <p className="plant-detail"> {item.conditions}</p>
            <p className="sp-subtitle"> 💦 Water: </p>
            <p className="plant-detail">{item.water}</p>
            <p className="sp-subtitle"> 🌱 Difficulty: </p>
            <p className="plant-detail">{item.difficulty} </p>
            <button className="order-btn">Save ❤️</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlantSingle;
