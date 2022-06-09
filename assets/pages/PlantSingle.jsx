import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const PlantSingle = () => {

  const [item, setItem] = useState({});
  const [id, setId] = useState(useParams().id);
  const [isActive, setIsActive] = useState("");

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


  const addLike = (e) => {
    e.preventDefault();
    var bodyFormData = new FormData();
    for (let key in item)
      bodyFormData.append(key, item[key]);

    axios.post(`http://localhost:8007/api/favourite`, bodyFormData)
    setIsActive(true);
  }


  return (
    <>
      <Header />
      <div className="sp-container">
        <h1>{item.name}</h1>

        <div className="sp-card">
          <img className="sp-img" src={item.img} alt="" />
          <div className="sp-text">
            <p className="sp-subtitle"> ☀️ Conditions: </p>
            <p className="plant-detail"> {item.conditions}</p>
            <p className="sp-subtitle"> 💦 Water: </p>
            <p className="plant-detail">{item.water}</p>
            <p className="sp-subtitle"> 🌱 Difficulty: </p>
            <p className="plant-detail">{item.difficulty} </p>
            {/* <button className="like-btn" onClick={addLike}>
              Save ❤️
            </button> */}
            <button type="button" id="like-button" onClick={addLike}  style={{
          backgroundColor: isActive ? 'indianred' : '',
          color: isActive ? 'white' : '',
        }}>
<svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"/></svg>
  Like
</button>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlantSingle;
