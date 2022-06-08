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

  // const [data, setData] = useState({
  //   name: "",
  //   image: ""

  // });

  useEffect(() => {
    axios
      .get(`http://localhost:8007/api/plants/${id}`)
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
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

  const addLike = (e) => {
    e.preventDefault();
    console.log(item)
    var bodyFormData = new FormData();
    for (let key in item)
      bodyFormData.append(key, item[key]);

    axios.post(`http://localhost:8007/api/favourite`, bodyFormData)}
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })};

  return (
    <>
      <Header />
      <div className="sp-container">
        <h1>{item.name}</h1>

        <div className="sp-card">
          <img src={item.img} alt="" />
          <div className="sp-text">
            <p className="sp-subtitle"> ☀️ Conditions: </p>
            <p className="plant-detail"> {item.conditions}</p>
            <p className="sp-subtitle"> 💦 Water: </p>
            <p className="plant-detail">{item.water}</p>
            <p className="sp-subtitle"> 🌱 Difficulty: </p>
            <p className="plant-detail">{item.difficulty} </p>
            <button className="order-btn" onClick={addLike}>
              Save ❤️
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlantSingle;
